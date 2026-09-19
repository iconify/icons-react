import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reac64byt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reac64byt"/>`,
		"fallback": "file-icons:glide",
	});
}

export default Component;
