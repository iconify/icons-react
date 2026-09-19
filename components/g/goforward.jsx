import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dih2-uk2d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dih2-uk2d"/>`,
		"fallback": "f7:goforward",
	});
}

export default Component;
