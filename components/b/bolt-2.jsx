import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqzxq_bgj.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqzxq_bgj"/>`,
		"fallback": "lineicons:bolt-2",
	});
}

export default Component;
