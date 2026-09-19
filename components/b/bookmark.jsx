import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz_v76b4s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz_v76b4s"/>`,
		"fallback": "f7:bookmark",
	});
}

export default Component;
