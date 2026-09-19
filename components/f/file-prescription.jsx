import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kygawes_f.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kygawes_f"/>`,
		"fallback": "fa-solid:file-prescription",
	});
}

export default Component;
