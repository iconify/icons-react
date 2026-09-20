import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxeajxbtq.css';
import '../../css/a/a_k81umyt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxeajxbtq"/><path class="a_k81umyt"/>`,
		"fallback": "qlementine-icons:anchor-center-middle-16",
	});
}

export default Component;
