import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td89tqozp.css';
import '../../css/c/cdxiukj0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td89tqozp"/><path clip-rule="evenodd" class="cdxiukj0b"/>`,
		"fallback": "basil:contacts-outline",
	});
}

export default Component;
