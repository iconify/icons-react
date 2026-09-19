import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk6u7080f.css';
import '../../css/n/nrl8gacpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yk6u7080f"/><path class="nrl8gacpg"/>`,
		"fallback": "basil:cloud-off-outline",
	});
}

export default Component;
