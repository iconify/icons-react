import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4x19-bfl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4x19-bfl"/>`,
		"fallback": "streamline:image-photo-composition-vertical-camera-portrait-frame-vertical-composition-photography-photo",
	});
}

export default Component;
