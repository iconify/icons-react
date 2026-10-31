import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlm0l6bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zlm0l6bpo"/>`,
		"fallback": "sidekickicons:h5-solid",
	});
}

export default Component;
