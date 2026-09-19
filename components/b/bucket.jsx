import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcfqgs_zg.css';

const viewBox = {"width":580,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcfqgs_zg"/>`,
		"fallback": "il:bucket",
	});
}

export default Component;
