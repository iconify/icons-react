import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th6q-fb2o.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th6q-fb2o"/>`,
		"fallback": "fa-solid:couch",
	});
}

export default Component;
