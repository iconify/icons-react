import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz4cr67ul.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz4cr67ul"/>`,
		"fallback": "carbon:ibm-watson-text-to-speech",
	});
}

export default Component;
