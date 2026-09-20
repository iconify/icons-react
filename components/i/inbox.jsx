import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clltq9axj.css';
import '../../css/d/dlpepfyti.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clltq9axj"/><path class="dlpepfyti"/>`,
		"fallback": "lineicons:inbox",
	});
}

export default Component;
