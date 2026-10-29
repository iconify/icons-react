import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goc6or3vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goc6or3vc"/>`,
		"fallback": "vadivam:door-closed-locked",
	});
}

export default Component;
