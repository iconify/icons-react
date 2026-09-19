import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9-r-6e9w.css';
import '../../css/s/s2k9j_-go.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9-r-6e9w"/><path class="s2k9j_-go"/>`,
		"fallback": "cil:featured-playlist",
	});
}

export default Component;
