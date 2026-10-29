import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mun6vbc9f.css';
import '../../css/t/t0-t7obvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mun6vbc9f wm-k"/><path class="t0-t7obvm wm-a"/>`,
		"fallback": "withicons-bauhaus:check-square",
	});
}

export default Component;
