import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/n/ncnv649nf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRwe1BbPC"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="ncnv649nf"/></g></mask></defs><path mask="url(#SVGRwe1BbPC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:grinning-face-with-squinting-eyes",
	});
}

export default Component;
