import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdsnvn27d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdsnvn27d"/>`,
		"fallback": "f7:cloud-bolt-fill",
	});
}

export default Component;
