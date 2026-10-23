import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgng7ybrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgng7ybrk"/>`,
		"fallback": "vadivam:folder-pen",
	});
}

export default Component;
