import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfb26sb-e.css';
import '../../css/d/d1x_6zbkv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfb26sb-e"/><path class="d1x_6zbkv"/>`,
		"fallback": "tabler-flags:austria",
	});
}

export default Component;
