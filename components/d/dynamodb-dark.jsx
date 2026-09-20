import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/e/e069invtl.css';
import '../../css/f/fmckybbge.css';
import '../../css/t/tk-0h_bhj.css';
import '../../css/a/anzkmq82z.css';
import '../../css/f/fhj3xlbxu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="e069invtl"/><path class="fmckybbge"/><path class="tk-0h_bhj"/><path class="anzkmq82z"/><path class="fhj3xlbxu"/></g>`,
		"fallback": "skill-icons:dynamodb-dark",
	});
}

export default Component;
