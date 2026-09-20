import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/n/neu5fd5mv.css';
import '../../css/h/hplk2-5xc.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG1IJa4diR"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="neu5fd5mv"/><path class="hplk2-5xc"/></g></mask></defs><circle mask="url(#SVG1IJa4diR)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:flag-circle-filled",
	});
}

export default Component;
