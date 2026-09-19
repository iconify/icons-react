import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzzkz4bes.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzzkz4bes"/>`,
		"fallback": "fa-solid:h-square",
	});
}

export default Component;
