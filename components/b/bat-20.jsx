import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twfn9u9ct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twfn9u9ct"/>`,
		"fallback": "energy-icons:bat-20",
	});
}

export default Component;
