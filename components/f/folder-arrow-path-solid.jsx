import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1a9-_b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1a9-_b5g"/>`,
		"fallback": "sidekickicons:folder-arrow-path-solid",
	});
}

export default Component;
