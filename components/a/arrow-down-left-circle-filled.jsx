import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/z/z93oqzhwa.css';
import '../../css/q/qra9urbgq.css';
import '../../css/a/am6c66wmk.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG1Ebc0dyn"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="z93oqzhwa"/><path class="qra9urbgq"/><path class="am6c66wmk"/></g></mask></defs><circle mask="url(#SVG1Ebc0dyn)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:arrow-down-left-circle-filled",
	});
}

export default Component;
