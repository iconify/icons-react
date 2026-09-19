import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5hig7ban.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5hig7ban"/>`,
		"fallback": "fa7-regular:face-smile",
	});
}

export default Component;
