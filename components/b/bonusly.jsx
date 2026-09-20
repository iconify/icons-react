import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp6l9nbkg.css';

const viewBox = {"width":35,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp6l9nbkg"/>`,
		"fallback": "thesvg-color:bonusly",
	});
}

export default Component;
