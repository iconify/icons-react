import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrbizmbmn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrbizmbmn"/>`,
		"fallback": "f7:gobackward-90",
	});
}

export default Component;
