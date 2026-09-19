import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz0srxb4e.css';
import '../../css/l/l7worlosa.css';
import '../../css/r/ro8ijeb-n.css';
import '../../css/t/t5gqrho5s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz0srxb4e"/><path class="l7worlosa"/><path class="ro8ijeb-n"/><path class="t5gqrho5s"/>`,
		"fallback": "carbon:edge-enhancement",
	});
}

export default Component;
