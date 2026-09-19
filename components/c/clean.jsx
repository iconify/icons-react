import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av0n4_bbp.css';

const viewBox = {"width":319,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av0n4_bbp"/>`,
		"fallback": "file-icons:clean",
	});
}

export default Component;
