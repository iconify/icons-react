import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6uz3dquh.css';
import '../../css/c/cn5tumcdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6uz3dquh"/><path class="cn5tumcdn"/>`,
		"fallback": "stash:eye-opened-solid",
	});
}

export default Component;
