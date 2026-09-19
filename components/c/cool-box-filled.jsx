import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b55fsm9et.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b55fsm9et"/>`,
		"fallback": "dinkie-icons:cool-box-filled",
	});
}

export default Component;
