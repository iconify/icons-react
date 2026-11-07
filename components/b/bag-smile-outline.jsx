import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp4pd42li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qp4pd42li"/>`,
		"fallback": "solar:bag-smile-outline",
	});
}

export default Component;
