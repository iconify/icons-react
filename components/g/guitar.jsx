import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu-50lb7t.css';
import '../../css/b/brgqastdd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu-50lb7t"/><path class="brgqastdd"/>`,
		"fallback": "nimbus:guitar",
	});
}

export default Component;
