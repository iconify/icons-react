import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx7aosk7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sx7aosk7k"/>`,
		"fallback": "file-icons:adobe-creativecloud",
	});
}

export default Component;
