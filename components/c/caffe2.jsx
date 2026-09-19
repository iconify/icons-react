import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri13whboc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri13whboc"/>`,
		"fallback": "file-icons:caffe2",
	});
}

export default Component;
