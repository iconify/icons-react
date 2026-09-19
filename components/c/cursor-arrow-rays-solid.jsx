import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh4k8abwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eh4k8abwt"/>`,
		"fallback": "heroicons:cursor-arrow-rays-solid",
	});
}

export default Component;
