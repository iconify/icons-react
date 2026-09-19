import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crf4l7z4x.css';

const viewBox = {"width":396,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crf4l7z4x"/>`,
		"fallback": "file-icons:composer",
	});
}

export default Component;
