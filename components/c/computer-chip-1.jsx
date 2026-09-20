import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_poprf4q.css';
import '../../css/a/a03_d6cpm.css';
import '../../css/b/brb3jq8_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_poprf4q"/><path class="a03_d6cpm"/><path class="brb3jq8_w"/></g>`,
		"fallback": "streamline-flex-color:computer-chip-1",
	});
}

export default Component;
