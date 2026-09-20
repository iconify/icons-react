import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz8c3l5-w.css';
import '../../css/k/kel-qrbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz8c3l5-w"/><path class="kel-qrbls"/>`,
		"fallback": "stash:image-minus-duotone",
	});
}

export default Component;
