import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv88xp9pl.css';

const viewBox = {"width":432,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv88xp9pl"/>`,
		"fallback": "zmdi:camera-roll",
	});
}

export default Component;
