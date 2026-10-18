import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjc28qb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjc28qb5f"/>`,
		"fallback": "vadivam:bluetooth",
	});
}

export default Component;
