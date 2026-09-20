import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co7a9db0d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="co7a9db0d"/>`,
		"fallback": "streamline-flex:cat-2-solid",
	});
}

export default Component;
