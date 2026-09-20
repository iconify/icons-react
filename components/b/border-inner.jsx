import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq5xa1f1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq5xa1f1k"/>`,
		"fallback": "tabler:border-inner",
	});
}

export default Component;
