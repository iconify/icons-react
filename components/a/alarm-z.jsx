import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d86adob8w.css';
import '../../css/b/bvt239bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d86adob8w"/><path class="bvt239bux"/>`,
		"fallback": "boxicons:alarm-z",
	});
}

export default Component;
