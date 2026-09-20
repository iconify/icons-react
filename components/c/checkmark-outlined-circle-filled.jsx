import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/g/gjsii3f9x.css';
import '../../css/p/p3aw6_brk.css';
import '../../css/v/v2e3hkb9g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG8BSlCDaW"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="gjsii3f9x"/><path class="p3aw6_brk"/><path class="v2e3hkb9g"/></g></mask></defs><circle mask="url(#SVG8BSlCDaW)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:checkmark-outlined-circle-filled",
	});
}

export default Component;
