import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpvwby7ij.css';
import '../../css/t/tq2qnvbug.css';
import '../../css/k/k-njt2b4a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpvwby7ij"/><path class="tq2qnvbug"/><path class="k-njt2b4a"/>`,
		"fallback": "temaki:cable-meter",
	});
}

export default Component;
