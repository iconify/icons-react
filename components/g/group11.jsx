import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ehzunbwiz.css';
import '../../css/f/fg0d_zimf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ehzunbwiz"/><path class="fg0d_zimf"/></g>`,
		"fallback": "reicon:group11",
	});
}

export default Component;
