import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpob04b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bpob04b6r"/>`,
		"fallback": "sidekickicons:cloud-arrow-path-solid",
	});
}

export default Component;
