import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5n1dclep.css';
import '../../css/h/hy57-wdqb.css';
import '../../css/l/l6fq0ni7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5n1dclep"/><path class="hy57-wdqb"/><path class="l6fq0ni7g"/>`,
		"fallback": "fxemoji:friedshrimp",
	});
}

export default Component;
