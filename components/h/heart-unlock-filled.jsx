import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9xpd5bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9xpd5bnk"/>`,
		"fallback": "reicon:heart-unlock-filled",
	});
}

export default Component;
