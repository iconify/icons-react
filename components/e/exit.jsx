import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjk7blide.css';
import '../../css/t/tfmdi36dd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjk7blide"/><path class="tfmdi36dd"/>`,
		"fallback": "uim:exit",
	});
}

export default Component;
