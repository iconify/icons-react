import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emb9gnbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emb9gnbch"/>`,
		"fallback": "boxicons:grid-lines",
	});
}

export default Component;
