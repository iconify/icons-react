import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii82hnrhg.css';
import '../../css/e/eu4o_3evy.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii82hnrhg"/><path clip-rule="evenodd" class="eu4o_3evy"/>`,
		"fallback": "lineicons:cloud-bolt-2",
	});
}

export default Component;
