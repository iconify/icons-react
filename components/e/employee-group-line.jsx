import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqs9-mufr.css';
import '../../css/v/vs04vpd1q.css';
import '../../css/f/f2k3b6b_y.css';
import '../../css/g/g2clxsbza.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqs9-mufr"/><path class="vs04vpd1q"/><path class="f2k3b6b_y"/><path class="g2clxsbza"/>`,
		"fallback": "clarity:employee-group-line",
	});
}

export default Component;
