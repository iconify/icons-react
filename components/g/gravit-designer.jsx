import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h17i68bvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h17i68bvo"/>`,
		"fallback": "file-icons:gravit-designer",
	});
}

export default Component;
