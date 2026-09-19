import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-iqi5fsu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-iqi5fsu"/>`,
		"fallback": "fa6-solid:file-code",
	});
}

export default Component;
