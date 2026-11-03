import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q84-m7bmy.css';
import '../../css/z/zr8ct4-nj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q84-m7bmy"/><path class="zr8ct4-nj"/>`,
		"fallback": "devicon:homeassistant",
	});
}

export default Component;
