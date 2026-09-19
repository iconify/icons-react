import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llog1wgkm.css';

const viewBox = {"width":469,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llog1wgkm"/>`,
		"fallback": "file-icons:caffe",
	});
}

export default Component;
