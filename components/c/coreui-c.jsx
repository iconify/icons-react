import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4mh9zb-o.css';
import '../../css/b/bpl1kribr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4mh9zb-o"/><path class="bpl1kribr"/>`,
		"fallback": "cib:coreui-c",
	});
}

export default Component;
