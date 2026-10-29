import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bmeezab9v.css';
import '../../css/e/eyr57ibcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bmeezab9v wm-a"/><path class="eyr57ibcj"/></g>`,
		"fallback": "withicons:arrow-up-from-line-duo",
	});
}

export default Component;
