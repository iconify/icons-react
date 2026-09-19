import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb55jl95u.css';
import '../../css/r/rh1pnvbcd.css';
import '../../css/c/c9bteb4uq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sb55jl95u"/><path class="rh1pnvbcd"/><path class="c9bteb4uq"/>`,
		"fallback": "carbon:direction-rotary-straight-filled",
	});
}

export default Component;
