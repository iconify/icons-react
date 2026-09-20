import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3r5-6bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3r5-6bff"/>`,
		"fallback": "octicon:file-symlink-file-24",
	});
}

export default Component;
