import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z132mnbgz.css';
import '../../css/g/gcakk6n9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z132mnbgz"/><path class="gcakk6n9i"/>`,
		"fallback": "boxicons:file-detail",
	});
}

export default Component;
