import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sznxx_but.css';
import '../../css/d/dduzo9-ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sznxx_but"/><path class="dduzo9-ka"/>`,
		"fallback": "circum:credit-card-1",
	});
}

export default Component;
