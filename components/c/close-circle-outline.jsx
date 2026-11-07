import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az99_v9tj.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az99_v9tj"/><path clip-rule="evenodd" class="q1sggqbkg"/>`,
		"fallback": "solar:close-circle-outline",
	});
}

export default Component;
