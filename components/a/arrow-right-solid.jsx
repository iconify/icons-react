import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toxq-5b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="toxq-5b4p"/>`,
		"fallback": "heroicons:arrow-right-solid",
	});
}

export default Component;
