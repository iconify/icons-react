import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxq6ljq2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxq6ljq2j"/>`,
		"fallback": "boxicons:arrow-s-up-filled",
	});
}

export default Component;
