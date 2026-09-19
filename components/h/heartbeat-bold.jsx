import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie7e9dbhm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ie7e9dbhm"/>`,
		"fallback": "glyphs:heartbeat-bold",
	});
}

export default Component;
