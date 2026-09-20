import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr_w68m6s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr_w68m6s"/>`,
		"fallback": "streamline-flex:delete-tag",
	});
}

export default Component;
