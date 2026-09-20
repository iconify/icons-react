import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-8zq7ywg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-8zq7ywg"/>`,
		"fallback": "tabler:dots-diagonal",
	});
}

export default Component;
