import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5i3wzbfe.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5i3wzbfe"/>`,
		"fallback": "fa:file-video-o",
	});
}

export default Component;
