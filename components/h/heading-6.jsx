import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp676obqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp676obqc"/>`,
		"fallback": "vadivam:heading-6",
	});
}

export default Component;
