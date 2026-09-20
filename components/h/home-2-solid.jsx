import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlc7xz5lz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mlc7xz5lz"/>`,
		"fallback": "streamline-flex:home-2-solid",
	});
}

export default Component;
