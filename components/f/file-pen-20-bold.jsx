import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezyuvccht.css';
import '../../css/l/lz-h06bny.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezyuvccht"/><path class="lz-h06bny"/>`,
		"fallback": "energy-icons:file-pen-20-bold",
	});
}

export default Component;
