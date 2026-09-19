import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toc71bc9x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toc71bc9x"/>`,
		"fallback": "heroicons-solid:cloud",
	});
}

export default Component;
