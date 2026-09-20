import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkclc-bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkclc-bmu"/>`,
		"fallback": "tdesign:fingerprint-2",
	});
}

export default Component;
