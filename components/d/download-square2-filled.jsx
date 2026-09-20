import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv7pwtboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lv7pwtboh"/>`,
		"fallback": "reicon:download-square2-filled",
	});
}

export default Component;
