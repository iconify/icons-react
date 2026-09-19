import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8w2yjbbk.css';
import '../../css/c/citsypb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8w2yjbbk"/><path class="citsypb7n"/>`,
		"fallback": "boxicons:dock-top-arrow",
	});
}

export default Component;
