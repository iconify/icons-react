import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq_fqub5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq_fqub5c"/>`,
		"fallback": "ri:emotion-normal-fill",
	});
}

export default Component;
