import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kah53cyve.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kah53cyve"/>`,
		"fallback": "fa7-regular:file-audio",
	});
}

export default Component;
