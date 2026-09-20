import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs_t-dgjs.css';
import '../../css/b/b_zpflbco.css';
import '../../css/g/gt8ehhy9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs_t-dgjs"/><path class="b_zpflbco"/><path class="gt8ehhy9i"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-keyboard-button",
	});
}

export default Component;
