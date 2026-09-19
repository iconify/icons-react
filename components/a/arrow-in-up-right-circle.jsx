import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9mo31emm.css';
import '../../css/y/ysrry-bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9mo31emm"/><path class="ysrry-bqw"/>`,
		"fallback": "boxicons:arrow-in-up-right-circle",
	});
}

export default Component;
