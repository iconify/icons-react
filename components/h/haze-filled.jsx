import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayuyt_49f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ayuyt_49f"/>`,
		"fallback": "lsicon:haze-filled",
	});
}

export default Component;
