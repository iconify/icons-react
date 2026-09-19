import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph4laobgr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph4laobgr"/>`,
		"fallback": "fluent-mdl2:file-j-a-v-a",
	});
}

export default Component;
