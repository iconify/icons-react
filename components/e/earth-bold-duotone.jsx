import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxlgg64z.css';
import '../../css/q/qcdgl6btj.css';
import '../../css/e/e23ts40de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hrxlgg64z"/><path class="qcdgl6btj"/><path class="e23ts40de"/>`,
		"fallback": "solar:earth-bold-duotone",
	});
}

export default Component;
