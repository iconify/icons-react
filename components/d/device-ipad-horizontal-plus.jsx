import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8odk0bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8odk0bpk"/>`,
		"fallback": "tabler:device-ipad-horizontal-plus",
	});
}

export default Component;
