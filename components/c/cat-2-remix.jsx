import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_kk2vjms.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a_kk2vjms"/>`,
		"fallback": "streamline-flex:cat-2-remix",
	});
}

export default Component;
