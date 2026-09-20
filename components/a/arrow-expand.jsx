import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju6kq_tox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju6kq_tox"/>`,
		"fallback": "streamline-sharp:arrow-expand",
	});
}

export default Component;
