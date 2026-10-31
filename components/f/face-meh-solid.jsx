import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he05ftlzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="he05ftlzh"/>`,
		"fallback": "sidekickicons:face-meh-solid",
	});
}

export default Component;
