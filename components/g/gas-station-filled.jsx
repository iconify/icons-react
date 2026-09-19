import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kccx5mbrd.css';
import '../../css/c/cigvp3btk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kccx5mbrd"/><path class="cigvp3btk"/>`,
		"fallback": "carbon:gas-station-filled",
	});
}

export default Component;
