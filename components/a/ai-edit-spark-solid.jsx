import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tza4e1wgh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tza4e1wgh"/>`,
		"fallback": "streamline:ai-edit-spark-solid",
	});
}

export default Component;
