import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4p2dtbwt.css';
import '../../css/i/ia-bsrbll.css';
import '../../css/b/bog62tbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4p2dtbwt"/><path class="ia-bsrbll"/><path class="bog62tbai"/>`,
		"fallback": "boxicons:images",
	});
}

export default Component;
