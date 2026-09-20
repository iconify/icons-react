import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lflyau5pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lflyau5pe"/>`,
		"fallback": "keyline-icons:chevron-left-two-tone",
	});
}

export default Component;
