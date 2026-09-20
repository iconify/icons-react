import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgo3yzakc.css';
import '../../css/m/m7lzhdc8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgo3yzakc"/><path class="m7lzhdc8k"/>`,
		"fallback": "uim:arrow-up-right",
	});
}

export default Component;
