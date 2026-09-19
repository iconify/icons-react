import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-fmy342m.css';

const viewBox = {"width":449,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-fmy342m"/>`,
		"fallback": "file-icons:fossil",
	});
}

export default Component;
