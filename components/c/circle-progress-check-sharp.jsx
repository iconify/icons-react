import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um5gi2bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um5gi2bpw"/>`,
		"fallback": "keyline-icons:circle-progress-check-sharp",
	});
}

export default Component;
