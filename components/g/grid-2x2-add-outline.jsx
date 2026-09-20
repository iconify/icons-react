import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqpg69lvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqpg69lvf"/>`,
		"fallback": "solar:grid-2x2-add-outline",
	});
}

export default Component;
