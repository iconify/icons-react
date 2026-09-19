import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt6fu6oeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rt6fu6oeo"/>`,
		"fallback": "iconamoon:file-audio-fill",
	});
}

export default Component;
