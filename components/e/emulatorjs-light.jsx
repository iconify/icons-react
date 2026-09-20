import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv4hdlb2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv4hdlb2t"/>`,
		"fallback": "selfhst:emulatorjs-light",
	});
}

export default Component;
