import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve2d5cbgv.css';
import '../../css/a/ay_ybxb5f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve2d5cbgv"/><path class="ay_ybxb5f"/>`,
		"fallback": "energy-icons:airplay-20",
	});
}

export default Component;
