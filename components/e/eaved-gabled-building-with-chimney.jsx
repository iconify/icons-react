import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjgp20b1y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjgp20b1y"/>`,
		"fallback": "pinhead:eaved-gabled-building-with-chimney",
	});
}

export default Component;
