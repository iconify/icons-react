import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/imqcuvbom.css';
import '../../css/p/phuno9t-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="imqcuvbom"/><path clip-rule="evenodd" class="phuno9t-b"/></g>`,
		"fallback": "iconoir:fill-color",
	});
}

export default Component;
