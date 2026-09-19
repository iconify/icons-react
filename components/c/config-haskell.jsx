import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo_x6wbqk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo_x6wbqk"/>`,
		"fallback": "file-icons:config-haskell",
	});
}

export default Component;
