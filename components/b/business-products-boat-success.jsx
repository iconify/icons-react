import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjrb-gbdh.css';
import '../../css/r/rkdm0ob1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjrb-gbdh"/><path class="rkdm0ob1v"/>`,
		"fallback": "streamline-pixel:business-products-boat-success",
	});
}

export default Component;
