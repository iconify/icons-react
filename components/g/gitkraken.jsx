import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtiz8krcv.css';

const viewBox = {"width":592,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtiz8krcv"/>`,
		"fallback": "fa6-brands:gitkraken",
	});
}

export default Component;
