import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm5l_ww-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm5l_ww-j"/>`,
		"fallback": "boxicons:git-compare",
	});
}

export default Component;
