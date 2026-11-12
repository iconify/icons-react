import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bykqkzu6u.css';
import '../../css/y/ywetm1j1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bykqkzu6u"/><path clip-rule="evenodd" class="ywetm1j1s"/>`,
		"fallback": "token:cbbtc",
	});
}

export default Component;
