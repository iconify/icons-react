import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lng-c-b-j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lng-c-b-j"/>`,
		"fallback": "fluent-mdl2:dropdown",
	});
}

export default Component;
