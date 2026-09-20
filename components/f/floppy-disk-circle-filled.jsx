import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/j/ji70fypkw.css';
import '../../css/g/gjqc3fiet.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG5uhQGcEv"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="ji70fypkw"/><path class="gjqc3fiet"/></g></mask></defs><circle mask="url(#SVG5uhQGcEv)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:floppy-disk-circle-filled",
	});
}

export default Component;
