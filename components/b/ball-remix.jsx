import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awhr4eq_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awhr4eq_e"/>`,
		"fallback": "streamline-flex:ball-remix",
	});
}

export default Component;
