import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odmt8ovdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odmt8ovdc"/>`,
		"fallback": "cbi:adore-mirror",
	});
}

export default Component;
