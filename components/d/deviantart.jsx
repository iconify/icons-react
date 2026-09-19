import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6wfyopub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6wfyopub"/>`,
		"fallback": "cib:deviantart",
	});
}

export default Component;
