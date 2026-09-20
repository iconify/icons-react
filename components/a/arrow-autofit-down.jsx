import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl7u8lp9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl7u8lp9y"/>`,
		"fallback": "tabler:arrow-autofit-down",
	});
}

export default Component;
