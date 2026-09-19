import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u01pf_bhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u01pf_bhp"/>`,
		"fallback": "dashicons:hammer",
	});
}

export default Component;
