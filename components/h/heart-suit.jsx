import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc41vib9q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc41vib9q"/>`,
		"fallback": "fluent-emoji-flat:heart-suit",
	});
}

export default Component;
