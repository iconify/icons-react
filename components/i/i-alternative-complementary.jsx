import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krumclx4i.css';
import '../../css/n/nvoqp-sdc.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krumclx4i"/><path class="nvoqp-sdc"/>`,
		"fallback": "medical-icon:i-alternative-complementary",
	});
}

export default Component;
