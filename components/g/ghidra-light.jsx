import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9q3jccrn.css';
import '../../css/m/m920y4n8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9q3jccrn"/><path class="m920y4n8j"/>`,
		"fallback": "selfhst:ghidra-light",
	});
}

export default Component;
