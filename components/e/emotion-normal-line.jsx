import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah_kni4_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah_kni4_s"/>`,
		"fallback": "ri:emotion-normal-line",
	});
}

export default Component;
