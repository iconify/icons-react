import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrradhcvv.css';

const viewBox = {"width":1568,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrradhcvv"/>`,
		"fallback": "fa:backward",
	});
}

export default Component;
