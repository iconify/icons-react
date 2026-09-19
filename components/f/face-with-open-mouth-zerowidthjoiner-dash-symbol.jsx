import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixi_e8amv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixi_e8amv"/>`,
		"fallback": "dinkie-icons:face-with-open-mouth-zerowidthjoiner-dash-symbol",
	});
}

export default Component;
