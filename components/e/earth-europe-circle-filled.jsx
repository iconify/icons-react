import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/j/jnuktt31k.css';
import '../../css/p/p8x-3_bwr.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGffElfclA"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="jnuktt31k"/><path class="p8x-3_bwr"/></g></mask></defs><circle mask="url(#SVGffElfclA)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:earth-europe-circle-filled",
	});
}

export default Component;
