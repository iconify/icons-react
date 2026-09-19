import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6xnufbol.css';
import '../../css/j/jtlquzbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6xnufbol duoicon-primary-layer"/><path class="duoicon-secondary-layer jtlquzbyu"/>`,
		"fallback": "duo-icons:candle",
	});
}

export default Component;
