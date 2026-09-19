import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7ldvs2_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7ldvs2_c"/>`,
		"fallback": "cbi:ikea-dejsa",
	});
}

export default Component;
