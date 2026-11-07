import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxlgg64z.css';
import '../../css/e/er9_2_bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hrxlgg64z"/><path class="er9_2_bjd"/>`,
		"fallback": "solar:circle-dot-bold-duotone",
	});
}

export default Component;
