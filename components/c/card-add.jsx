import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uh7ju2rpw.css';
import '../../css/l/l6-0iw9fz.css';
import '../../css/h/haaieybaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uh7ju2rpw"/><path class="l6-0iw9fz"/><path class="haaieybaf"/></g>`,
		"fallback": "reicon:card-add",
	});
}

export default Component;
