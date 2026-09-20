import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4g6f4bfq.css';
import '../../css/m/ml0gmablf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4g6f4bfq"/><path class="ml0gmablf"/>`,
		"fallback": "material-icon-theme:cuda",
	});
}

export default Component;
