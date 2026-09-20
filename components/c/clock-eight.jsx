import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgja8vbbk.css';
import '../../css/i/ixpwojbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgja8vbbk"/><path class="ixpwojbwn"/>`,
		"fallback": "uim:clock-eight",
	});
}

export default Component;
