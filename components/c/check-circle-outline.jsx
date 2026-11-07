import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h99or5zfb.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h99or5zfb"/><path clip-rule="evenodd" class="q1sggqbkg"/>`,
		"fallback": "solar:check-circle-outline",
	});
}

export default Component;
