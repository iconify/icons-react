import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqy2g75wd.css';
import '../../css/b/bm9qtjbmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqy2g75wd"/><path class="bm9qtjbmr"/>`,
		"fallback": "ion:alert-circle-sharp",
	});
}

export default Component;
