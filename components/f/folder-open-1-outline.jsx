import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9yt1cc9m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m9yt1cc9m"/>`,
		"fallback": "glyphs:folder-open-1-outline",
	});
}

export default Component;
