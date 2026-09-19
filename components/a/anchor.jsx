import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud1alzb_n.css';

const viewBox = {"width":35,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud1alzb_n"/>`,
		"fallback": "et:anchor",
	});
}

export default Component;
