import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfcjx_esq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfcjx_esq"/>`,
		"fallback": "tabler:circle-off",
	});
}

export default Component;
