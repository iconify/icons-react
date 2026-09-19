import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxujzib5b.css';
import '../../css/o/okc6ec79j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxujzib5b"/><path class="okc6ec79j"/>`,
		"fallback": "carbon:ibm-gcm",
	});
}

export default Component;
