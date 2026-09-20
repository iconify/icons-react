import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne1znnadb.css';
import '../../css/g/gkei3cclt.css';
import '../../css/v/vsiwl0bxq.css';
import '../../css/t/t4js61brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne1znnadb"/><path class="gkei3cclt"/><path class="vsiwl0bxq"/><path class="t4js61brz"/>`,
		"fallback": "mingcute:beachball-fill",
	});
}

export default Component;
