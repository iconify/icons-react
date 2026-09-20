import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_di7u-yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_di7u-yh"/>`,
		"fallback": "streamline-sharp:align-text-center-solid",
	});
}

export default Component;
