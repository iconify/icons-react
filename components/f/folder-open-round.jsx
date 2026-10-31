import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqv0rlgud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqv0rlgud"/>`,
		"fallback": "coolicons:folder-open-round",
	});
}

export default Component;
