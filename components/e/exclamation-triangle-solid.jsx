import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhgco_s2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhgco_s2a"/>`,
		"fallback": "pixel:exclamation-triangle-solid",
	});
}

export default Component;
