import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy-4x9bfo.css';
import '../../css/p/pb7t6bclw.css';
import '../../css/t/tvu3xz-hl.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy-4x9bfo"/><path class="pb7t6bclw"/><path class="tvu3xz-hl"/>`,
		"fallback": "clarity:contract-line",
	});
}

export default Component;
