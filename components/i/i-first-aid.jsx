import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbvkmbbya.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbvkmbbya"/>`,
		"fallback": "medical-icon:i-first-aid",
	});
}

export default Component;
