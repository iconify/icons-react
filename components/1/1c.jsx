import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxdlb5s3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxdlb5s3v"/>`,
		"fallback": "file-icons:1c",
	});
}

export default Component;
