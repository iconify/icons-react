import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hahx5mb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hahx5mb1b"/>`,
		"fallback": "coolicons:currency-ethereum-fill-round",
	});
}

export default Component;
