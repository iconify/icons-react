import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so70jzd9b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="so70jzd9b"/>`,
		"fallback": "streamline-flex:full-screen-osx-solid",
	});
}

export default Component;
