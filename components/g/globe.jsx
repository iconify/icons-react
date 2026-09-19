import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnghh3b2o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnghh3b2o"/>`,
		"fallback": "f7:globe",
	});
}

export default Component;
