import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/v/vicjo5y-h.css';
import '../../css/n/nwuq_h5kq.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGNS1z1c6P"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="vicjo5y-h"/><path class="nwuq_h5kq"/></g></mask></defs><circle mask="url(#SVGNS1z1c6P)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:bulletin-notice-circle-filled",
	});
}

export default Component;
