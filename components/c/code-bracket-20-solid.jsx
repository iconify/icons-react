import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spw5_r41r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="spw5_r41r"/>`,
		"fallback": "heroicons:code-bracket-20-solid",
	});
}

export default Component;
