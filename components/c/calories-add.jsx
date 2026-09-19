import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu7sg9wjo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu7sg9wjo"/>`,
		"fallback": "fluent-mdl2:calories-add",
	});
}

export default Component;
