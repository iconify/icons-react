import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/ckwow205p.css';
import '../../css/v/v5w6enite.css';
import '../../css/d/dzzg-wo1p.css';
import '../../css/k/k9ooefbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ckwow205p"/><path class="v5w6enite"/><path class="dzzg-wo1p"/><path class="k9ooefbuw"/></g>`,
		"fallback": "matita:infinity",
	});
}

export default Component;
