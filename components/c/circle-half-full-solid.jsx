import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl0u2jb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kl0u2jb5l"/>`,
		"fallback": "sidekickicons:circle-half-full-solid",
	});
}

export default Component;
