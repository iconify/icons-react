import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrx0drblt.css';
import '../../css/k/kvk09bbcv.css';
import '../../css/c/cv18w6a5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mrx0drblt"/><circle class="kvk09bbcv"/><path class="cv18w6a5r"/>`,
		"fallback": "typcn:divide",
	});
}

export default Component;
