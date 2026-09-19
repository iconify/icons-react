import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knf8ffp_z.css';

const viewBox = {"width":503,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knf8ffp_z"/>`,
		"fallback": "file-icons:dylib",
	});
}

export default Component;
