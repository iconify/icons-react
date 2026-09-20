import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/a/apmt4vl9x.css';
import '../../css/k/km0pn--7j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="apmt4vl9x"/><path class="km0pn--7j"/></g>`,
		"fallback": "streamline-flex-color:dna",
	});
}

export default Component;
