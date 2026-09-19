import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kucvonbff.css';
import '../../css/u/u-b8pnz0h.css';
import '../../css/a/avm801z_y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQ4W76d0C"><g class="ft5dv1b6b"><path class="kucvonbff"/><rect class="u-b8pnz0h"/><circle transform="matrix(-1 0 0 1 24 24)" class="avm801z_y"/></g></mask></defs><path mask="url(#SVGQ4W76d0C)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:focus",
	});
}

export default Component;
