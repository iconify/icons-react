import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qexpvkbfn.css';
import '../../css/n/nz1sgacqa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qexpvkbfn"/><path class="nz1sgacqa"/>`,
		"fallback": "ant-design:fire-twotone",
	});
}

export default Component;
