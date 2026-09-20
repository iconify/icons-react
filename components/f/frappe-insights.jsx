import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9n1396-x.css';
import '../../css/g/g-e3hmm2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9n1396-x"/><path class="g-e3hmm2f"/>`,
		"fallback": "selfhst:frappe-insights",
	});
}

export default Component;
