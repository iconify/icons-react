import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9o_b7jqm.css';
import '../../css/j/jxl67pbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9o_b7jqm"/><circle class="jxl67pbry"/></g>`,
		"fallback": "lucide:circle-dot-dashed",
	});
}

export default Component;
