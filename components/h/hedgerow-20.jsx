import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3if92b-h.css';
import '../../css/l/l6eer9b_b.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3if92b-h"/><path class="l6eer9b_b"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:hedgerow-20",
	});
}

export default Component;
