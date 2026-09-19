import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sttfplz3g.css';
import '../../css/e/er0fxe3xc.css';
import '../../css/c/cnwloqb3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sttfplz3g"/><path class="er0fxe3xc"/><path class="cnwloqb3t"/>`,
		"fallback": "fxemoji:filmframes",
	});
}

export default Component;
