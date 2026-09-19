import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja_wghbap.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja_wghbap"/>`,
		"fallback": "fluent-mdl2:cloudy",
	});
}

export default Component;
