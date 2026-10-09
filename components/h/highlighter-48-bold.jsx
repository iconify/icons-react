import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrc_6036o.css';
import '../../css/a/a99fs7b2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrc_6036o"/><path class="a99fs7b2u"/>`,
		"fallback": "energy-icons:highlighter-48-bold",
	});
}

export default Component;
