import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky72wso_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky72wso_a"/>`,
		"fallback": "ri:expand-diagonal-line",
	});
}

export default Component;
