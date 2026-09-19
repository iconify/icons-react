import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v44u1-gag.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v44u1-gag"/>`,
		"fallback": "fa7-solid:eye-slash",
	});
}

export default Component;
