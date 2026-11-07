import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njk-keb-f.css';
import '../../css/e/e3g82dqvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njk-keb-f"/><path clip-rule="evenodd" class="e3g82dqvc"/>`,
		"fallback": "solar:exit-outline",
	});
}

export default Component;
