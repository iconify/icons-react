import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hd073gb8d.css';
import '../../css/z/zrqjvoltc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hd073gb8d"/><path class="zrqjvoltc"/></g>`,
		"fallback": "streamline:ai-vehicle-spark-1",
	});
}

export default Component;
