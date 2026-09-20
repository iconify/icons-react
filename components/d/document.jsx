import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guzgzxb6x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guzgzxb6x"/>`,
		"fallback": "uiw:document",
	});
}

export default Component;
