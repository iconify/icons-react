import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxgx5bc6m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxgx5bc6m"/>`,
		"fallback": "glyphs:circle-duo",
	});
}

export default Component;
