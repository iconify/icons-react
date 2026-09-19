import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwdj9nbxn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwdj9nbxn"/>`,
		"fallback": "fa7-brands:creative-commons-sa",
	});
}

export default Component;
