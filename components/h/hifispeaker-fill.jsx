import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxupyj68y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxupyj68y"/>`,
		"fallback": "f7:hifispeaker-fill",
	});
}

export default Component;
