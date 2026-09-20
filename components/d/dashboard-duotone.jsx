import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcfaj0bdj.css';
import '../../css/c/c7b0ob2tk.css';
import '../../css/r/rcidtuiap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcfaj0bdj"/><path class="c7b0ob2tk"/><path class="rcidtuiap"/>`,
		"fallback": "stash:dashboard-duotone",
	});
}

export default Component;
