import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf1449bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qf1449bit"/>`,
		"fallback": "token:eosdt",
	});
}

export default Component;
