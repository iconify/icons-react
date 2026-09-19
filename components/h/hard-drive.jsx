import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlhhir1qw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlhhir1qw"/>`,
		"fallback": "fa6-regular:hard-drive",
	});
}

export default Component;
