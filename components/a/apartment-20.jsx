import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdirvfh-u.css';
import '../../css/r/r60z8bcvg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdirvfh-u"/><path class="r60z8bcvg"/>`,
		"fallback": "energy-icons:apartment-20",
	});
}

export default Component;
