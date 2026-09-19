import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq3pidbpg.css';
import '../../css/l/l93btfbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq3pidbpg"/><path class="l93btfbek"/>`,
		"fallback": "boxicons:dryer-filled",
	});
}

export default Component;
