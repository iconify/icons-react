import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptypnvblb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptypnvblb"/>`,
		"fallback": "streamline:image-photo-compsition-horizontal-camera-horizontal-panorama-composition-photography-photo-pictures",
	});
}

export default Component;
