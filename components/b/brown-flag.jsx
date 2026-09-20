import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a622r-z7c.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a622r-z7c"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:brown-flag",
	});
}

export default Component;
