import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opwx81bno.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opwx81bno"/>`,
		"fallback": "maki:garden-centre-11",
	});
}

export default Component;
