import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwia98bio.css';
import '../../css/y/yd8vu0b0e.css';
import '../../css/s/sd838mbnn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwia98bio"/><path class="yd8vu0b0e"/><path class="sd838mbnn"/>`,
		"fallback": "material-icon-theme:folder-docker-open",
	});
}

export default Component;
