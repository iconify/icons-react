import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-my5lk7s.css';
import '../../css/g/g8crnxb8s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-my5lk7s"/><path class="g8crnxb8s"/>`,
		"fallback": "icomoon-free:accessibility",
	});
}

export default Component;
