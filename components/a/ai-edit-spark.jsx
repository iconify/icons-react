import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk7f09zlp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk7f09zlp"/>`,
		"fallback": "streamline:ai-edit-spark",
	});
}

export default Component;
