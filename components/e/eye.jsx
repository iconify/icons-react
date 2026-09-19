import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shexgfo6g.css';
import '../../css/o/oin-52btw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="shexgfo6g"/><path class="oin-52btw"/>`,
		"fallback": "ion:eye",
	});
}

export default Component;
