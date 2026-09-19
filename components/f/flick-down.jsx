import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmmj80v-y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmmj80v-y"/>`,
		"fallback": "fluent-mdl2:flick-down",
	});
}

export default Component;
