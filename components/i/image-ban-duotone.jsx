import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxa465p2f.css';
import '../../css/i/iz8c3l5-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxa465p2f"/><path class="iz8c3l5-w"/>`,
		"fallback": "stash:image-ban-duotone",
	});
}

export default Component;
