import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vgxk7pq9s.css';
import '../../css/j/j49nim8cd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vgxk7pq9s"/><circle class="j49nim8cd"/></g>`,
		"fallback": "streamline:image-camera-1-photos-picture-camera-photography-photo-pictures",
	});
}

export default Component;
