import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afjig_b2i.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afjig_b2i"/>`,
		"fallback": "fa6-solid:couch",
	});
}

export default Component;
