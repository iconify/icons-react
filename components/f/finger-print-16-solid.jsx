import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af2n3wb9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="af2n3wb9q"/>`,
		"fallback": "heroicons:finger-print-16-solid",
	});
}

export default Component;
