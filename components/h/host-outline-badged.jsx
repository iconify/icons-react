import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glggx6o7t.css';
import '../../css/s/sj_1l9bqr.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glggx6o7t"/><path class="sj_1l9bqr"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:host-outline-badged",
	});
}

export default Component;
