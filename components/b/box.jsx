import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezoo6jbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezoo6jbcg"/>`,
		"fallback": "fa-solid:box",
	});
}

export default Component;
