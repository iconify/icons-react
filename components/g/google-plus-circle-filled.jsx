import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftf_zu7ol.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftf_zu7ol"/>`,
		"fallback": "ant-design:google-plus-circle-filled",
	});
}

export default Component;
