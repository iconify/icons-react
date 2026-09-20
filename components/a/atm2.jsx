import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbch_7bfy.css';
import '../../css/y/y9fzgxb1e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbch_7bfy"/><path class="y9fzgxb1e"/>`,
		"fallback": "temaki:atm2",
	});
}

export default Component;
