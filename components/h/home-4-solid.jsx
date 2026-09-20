import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmcsts5zc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tmcsts5zc"/>`,
		"fallback": "streamline:home-4-solid",
	});
}

export default Component;
