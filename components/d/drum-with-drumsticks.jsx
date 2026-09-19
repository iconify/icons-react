import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk7f4xtii.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk7f4xtii"/>`,
		"fallback": "dinkie-icons:drum-with-drumsticks",
	});
}

export default Component;
