import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/j/jnuktt31k.css';
import '../../css/l/lwtak-b2j.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGaYDeUcir"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="jnuktt31k"/><path class="lwtak-b2j"/></g></mask></defs><circle mask="url(#SVGaYDeUcir)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:earth-asia-circle-filled",
	});
}

export default Component;
