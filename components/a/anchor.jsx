import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efl6eqbrk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efl6eqbrk"/>`,
		"fallback": "fluent-emoji-flat:anchor",
	});
}

export default Component;
