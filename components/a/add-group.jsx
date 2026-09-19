import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maf4ygb2h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maf4ygb2h"/>`,
		"fallback": "fluent-mdl2:add-group",
	});
}

export default Component;
