import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bmp_jrbtq.css';
import '../../css/z/zwv64gbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bmp_jrbtq"/><path class="zwv64gbov"/></g>`,
		"fallback": "iconoir:cellar",
	});
}

export default Component;
