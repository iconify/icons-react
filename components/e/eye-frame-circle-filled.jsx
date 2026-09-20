import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/i/iov8d5b2r.css';
import '../../css/a/a1zqqilbh.css';
import '../../css/d/d2xxuhd-p.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGRXqnveKN"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="iov8d5b2r"/><path class="a1zqqilbh"/><path class="d2xxuhd-p"/></g></mask></defs><circle mask="url(#SVGRXqnveKN)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:eye-frame-circle-filled",
	});
}

export default Component;
