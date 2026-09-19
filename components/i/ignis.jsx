import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf5tybb4b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf5tybb4b"/>`,
		"fallback": "cryptocurrency:ignis",
	});
}

export default Component;
