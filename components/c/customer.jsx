import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ariq7rbyx.css';
import '../../css/r/r8qtg0eea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ariq7rbyx"/><path class="r8qtg0eea"/>`,
		"fallback": "carbon:customer",
	});
}

export default Component;
