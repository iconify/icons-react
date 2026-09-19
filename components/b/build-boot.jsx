import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-8nonb3q.css';

const viewBox = {"width":356,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-8nonb3q"/>`,
		"fallback": "file-icons:build-boot",
	});
}

export default Component;
