import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmycjebkn.css';
import '../../css/f/f6krj6bdn.css';
import '../../css/i/i6na-zfmx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmycjebkn"/><path class="f6krj6bdn"/><path class="i6na-zfmx"/>`,
		"fallback": "carbon:ibm-z-environments-dev-sec-ops",
	});
}

export default Component;
