import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oznaotbtq.css';
import '../../css/z/z8vf7-egw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oznaotbtq"/><path class="z8vf7-egw"/>`,
		"fallback": "ion:folder-open-outline",
	});
}

export default Component;
