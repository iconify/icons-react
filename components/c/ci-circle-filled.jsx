import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc0fmsbdq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc0fmsbdq"/>`,
		"fallback": "ant-design:ci-circle-filled",
	});
}

export default Component;
