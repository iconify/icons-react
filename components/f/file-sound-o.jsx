import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt6thsbzo.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt6thsbzo"/>`,
		"fallback": "fa:file-sound-o",
	});
}

export default Component;
