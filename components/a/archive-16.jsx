import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha4662b3c.css';
import '../../css/k/kn0-ukb4s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha4662b3c"/><path clip-rule="evenodd" class="kn0-ukb4s"/>`,
		"fallback": "qlementine-icons:archive-16",
	});
}

export default Component;
