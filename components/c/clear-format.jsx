import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csw0kbbpv.css';
import '../../css/s/sgw7h0bny.css';
import '../../css/s/sul83f9ve.css';
import '../../css/o/obbrti2nr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAND8ZcBU"><g class="csw0kbbpv"><path class="sgw7h0bny"/><path class="sul83f9ve"/><path class="obbrti2nr"/></g></mask></defs><path mask="url(#SVGAND8ZcBU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clear-format",
	});
}

export default Component;
