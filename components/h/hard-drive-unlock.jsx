import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx0dpu8wi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx0dpu8wi"/>`,
		"fallback": "fluent-mdl2:hard-drive-unlock",
	});
}

export default Component;
