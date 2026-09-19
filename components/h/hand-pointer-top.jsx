import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li74_n4iw.css';

const viewBox = {"width":304,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li74_n4iw"/>`,
		"fallback": "ps:hand-pointer-top",
	});
}

export default Component;
