import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/u/uzxb7dbfi.css';
import '../../css/z/zdg-6l18t.css';
import '../../css/v/vuzzriqjj.css';
import '../../css/a/a_22u3byu.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGnj9DUdkN"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="uzxb7dbfi"/><path class="zdg-6l18t"/><path class="vuzzriqjj"/><path class="a_22u3byu"/></g></mask></defs><circle mask="url(#SVGnj9DUdkN)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:clipboard-check-circled-circle-filled",
	});
}

export default Component;
