import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2v_17b2s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2v_17b2s"/>`,
		"fallback": "fluent-mdl2:add",
	});
}

export default Component;
