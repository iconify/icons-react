import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jb9z59bbo.css';
import '../../css/y/yr8nfg6of.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGBgS7qSkY)" class="cuyn6tgcc"><path class="jb9z59bbo"/><path class="yr8nfg6of"/></g><defs><clipPath id="SVGBgS7qSkY"><path class="w49j0rbvv"/></clipPath></defs></g>`,
		"fallback": "ginetex:70c-boil-wash",
	});
}

export default Component;
