import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr58843mv.css';
import '../../css/c/c9r1x5bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr58843mv"/><path class="c9r1x5bpq"/>`,
		"fallback": "boxicons:cat",
	});
}

export default Component;
