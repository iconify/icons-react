import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcew92bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcew92bzy"/>`,
		"fallback": "keyline-icons:circle-arrow-left-sharp-fill",
	});
}

export default Component;
