import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8-97cbmw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y8-97cbmw"/>`,
		"fallback": "streamline:calendar-add-solid",
	});
}

export default Component;
