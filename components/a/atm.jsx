import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2ckhrb2w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2ckhrb2w"/>`,
		"fallback": "temaki:atm",
	});
}

export default Component;
