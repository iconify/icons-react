import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts93_uoga.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts93_uoga"/>`,
		"fallback": "fluent-mdl2:construction-cone",
	});
}

export default Component;
