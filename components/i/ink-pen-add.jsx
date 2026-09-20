import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz296k4st.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz296k4st"/>`,
		"fallback": "ix:ink-pen-add",
	});
}

export default Component;
