import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9ciw2bty.css';
import '../../css/l/lnzzmyg9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9ciw2bty"/><path class="lnzzmyg9g"/>`,
		"fallback": "carbon:battery-half",
	});
}

export default Component;
