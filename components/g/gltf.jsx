import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy6a_fh8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy6a_fh8e"/>`,
		"fallback": "file-icons:gltf",
	});
}

export default Component;
