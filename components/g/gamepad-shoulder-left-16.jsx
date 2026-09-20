import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aieknlrza.css';
import '../../css/p/p-1znlk9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aieknlrza"/><path clip-rule="evenodd" class="p-1znlk9v"/>`,
		"fallback": "qlementine-icons:gamepad-shoulder-left-16",
	});
}

export default Component;
