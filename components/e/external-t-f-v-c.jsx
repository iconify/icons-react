import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjwx6ab_w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjwx6ab_w"/>`,
		"fallback": "fluent-mdl2:external-t-f-v-c",
	});
}

export default Component;
