import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrbpuobsp.css';
import '../../css/a/a_k2ufbcq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrbpuobsp"/><path class="a_k2ufbcq"/>`,
		"fallback": "icomoon-free:circle-down",
	});
}

export default Component;
