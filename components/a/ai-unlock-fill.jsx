import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc7aclrmb.css';
import '../../css/f/f4xb95eqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc7aclrmb"/><path clip-rule="evenodd" class="f4xb95eqz"/>`,
		"fallback": "si:ai-unlock-fill",
	});
}

export default Component;
