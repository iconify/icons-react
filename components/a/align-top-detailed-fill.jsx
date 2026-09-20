import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzg60ubxn.css';
import '../../css/z/z4470fb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzg60ubxn"/><path clip-rule="evenodd" class="z4470fb2t"/>`,
		"fallback": "si:align-top-detailed-fill",
	});
}

export default Component;
