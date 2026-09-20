import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv0wjcc0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mv0wjcc0z"/>`,
		"fallback": "streamline:earth-airplane-solid",
	});
}

export default Component;
