import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg7xajeea.css';
import '../../css/x/xcwpqnbkb.css';
import '../../css/l/lo4d7r9dr.css';
import '../../css/d/dkwexcp4j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg7xajeea"/><path class="xcwpqnbkb"/><path class="lo4d7r9dr"/><path class="dkwexcp4j"/>`,
		"fallback": "openmoji:eight-spoked-asterisk",
	});
}

export default Component;
