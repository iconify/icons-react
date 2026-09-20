import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii82hnrhg.css';
import '../../css/y/y0rh9nbet.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii82hnrhg"/><path clip-rule="evenodd" class="y0rh9nbet"/>`,
		"fallback": "lineicons:cloud-bolt-1",
	});
}

export default Component;
