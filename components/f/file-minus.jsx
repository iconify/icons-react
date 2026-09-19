import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7u3bta8y.css';
import '../../css/z/z132mnbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7u3bta8y"/><path class="z132mnbgz"/>`,
		"fallback": "boxicons:file-minus",
	});
}

export default Component;
