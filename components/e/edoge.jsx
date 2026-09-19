import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2iuq-b5t.css';
import '../../css/a/awl1vpb2u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="z2iuq-b5t"/><path class="awl1vpb2u"/></g>`,
		"fallback": "cryptocurrency-color:edoge",
	});
}

export default Component;
