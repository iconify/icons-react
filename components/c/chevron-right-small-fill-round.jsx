import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt0zfmnsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt0zfmnsh"/>`,
		"fallback": "coolicons:chevron-right-small-fill-round",
	});
}

export default Component;
