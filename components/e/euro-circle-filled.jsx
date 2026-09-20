import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/m/m68jc6zdp.css';
import '../../css/i/i6fgvymmi.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGBZdnheEZ"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="m68jc6zdp"/><path class="i6fgvymmi"/></g></mask></defs><circle mask="url(#SVGBZdnheEZ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:euro-circle-filled",
	});
}

export default Component;
