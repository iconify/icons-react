import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/f/fhv7sem-x.css';
import '../../css/m/mro15pfsn.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGNu6sGdPq"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="fhv7sem-x"/><path class="mro15pfsn"/></g></mask></defs><circle mask="url(#SVGNu6sGdPq)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:book-circle-filled",
	});
}

export default Component;
