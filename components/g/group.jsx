import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btm1bkawd.css';
import '../../css/x/x-53_-bbr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btm1bkawd"/><path class="x-53_-bbr"/>`,
		"fallback": "vaadin:group",
	});
}

export default Component;
