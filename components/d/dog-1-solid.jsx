import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6yi54rbj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t6yi54rbj"/>`,
		"fallback": "streamline-flex:dog-1-solid",
	});
}

export default Component;
