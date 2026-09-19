import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpp4vf5pi.css';
import '../../css/q/qhx66epws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpp4vf5pi"/><path class="qhx66epws"/>`,
		"fallback": "carbon:hotel",
	});
}

export default Component;
