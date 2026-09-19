import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edz60ccaq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edz60ccaq"/>`,
		"fallback": "f7:arrow-up-right-diamond-fill",
	});
}

export default Component;
