import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzbnv-3ul.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzbnv-3ul"/>`,
		"fallback": "fa6-regular:file-word",
	});
}

export default Component;
