import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7o3m7bgm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7o3m7bgm"/>`,
		"fallback": "cib:flipboard",
	});
}

export default Component;
