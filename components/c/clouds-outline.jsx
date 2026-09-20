import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heqy_fk9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="heqy_fk9c"/>`,
		"fallback": "solar:clouds-outline",
	});
}

export default Component;
