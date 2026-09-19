import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lybe10l9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lybe10l9v"/>`,
		"fallback": "icomoon-free:home3",
	});
}

export default Component;
