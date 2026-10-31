import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq76k3b_t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq76k3b_t"/>`,
		"fallback": "sidekickicons:badge-20-solid",
	});
}

export default Component;
