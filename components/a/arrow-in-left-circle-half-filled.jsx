import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5-5xebiw.css';
import '../../css/z/z7ybbhltq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5-5xebiw"/><path class="z7ybbhltq"/>`,
		"fallback": "boxicons:arrow-in-left-circle-half-filled",
	});
}

export default Component;
