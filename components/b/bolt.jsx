import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aflt1xbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aflt1xbkv"/>`,
		"fallback": "fe:bolt",
	});
}

export default Component;
