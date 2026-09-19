import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_son2bku.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_son2bku"/>`,
		"fallback": "heroicons-solid:book-open",
	});
}

export default Component;
