import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix6phcbzo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix6phcbzo"/>`,
		"fallback": "streamline:dressing-table-solid",
	});
}

export default Component;
