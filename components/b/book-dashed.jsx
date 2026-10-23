import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqgy42bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqgy42bpj"/>`,
		"fallback": "vadivam:book-dashed",
	});
}

export default Component;
