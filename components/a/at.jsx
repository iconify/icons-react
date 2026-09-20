import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxx4uub5u.css';
import '../../css/m/m7s1g-b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxx4uub5u"/><path class="m7s1g-b8j"/>`,
		"fallback": "uim:at",
	});
}

export default Component;
