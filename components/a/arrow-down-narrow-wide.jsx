import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka267ac_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka267ac_d"/>`,
		"fallback": "vadivam:arrow-down-narrow-wide",
	});
}

export default Component;
