import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh8av2-8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh8av2-8j"/>`,
		"fallback": "coolicons:circle-arrow-left-fill-round",
	});
}

export default Component;
