import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo9--sbwm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jo9--sbwm"/>`,
		"fallback": "pajamas:cancel",
	});
}

export default Component;
