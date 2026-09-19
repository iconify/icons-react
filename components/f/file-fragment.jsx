import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc0qlpbpc.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc0qlpbpc"/>`,
		"fallback": "fa6-solid:file-fragment",
	});
}

export default Component;
