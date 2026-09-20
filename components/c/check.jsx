import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-1at-txw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-1at-txw"/>`,
		"fallback": "nimbus:check",
	});
}

export default Component;
