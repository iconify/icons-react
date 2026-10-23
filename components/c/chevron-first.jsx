import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djfqpfwkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djfqpfwkv"/>`,
		"fallback": "vadivam:chevron-first",
	});
}

export default Component;
