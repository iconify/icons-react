import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf_ckyxru.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf_ckyxru"/>`,
		"fallback": "fluent-mdl2:go-mirrored",
	});
}

export default Component;
