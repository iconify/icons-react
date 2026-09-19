import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq-4k7bbe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq-4k7bbe"/>`,
		"fallback": "icomoon-free:google",
	});
}

export default Component;
