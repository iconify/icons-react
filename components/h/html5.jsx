import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbs6rebdo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbs6rebdo"/>`,
		"fallback": "uiw:html5",
	});
}

export default Component;
