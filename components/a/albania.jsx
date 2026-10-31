import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex9s0kk5d.css';
import '../../css/a/a_7jv01nq.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex9s0kk5d"/><path class="a_7jv01nq"/>`,
		"fallback": "tabler-flags:albania",
	});
}

export default Component;
