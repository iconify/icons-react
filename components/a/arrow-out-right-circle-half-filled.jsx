import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c852q-rbq.css';
import '../../css/z/z7ybbhltq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c852q-rbq"/><path class="z7ybbhltq"/>`,
		"fallback": "boxicons:arrow-out-right-circle-half-filled",
	});
}

export default Component;
