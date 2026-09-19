import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvlro3bdf.css';
import '../../css/w/whiyyb3wc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvlro3bdf"/><path class="whiyyb3wc"/>`,
		"fallback": "carbon:document-pdf",
	});
}

export default Component;
