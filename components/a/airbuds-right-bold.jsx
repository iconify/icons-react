import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/venqq4bqz.css';
import '../../css/u/u3u76o33j.css';
import '../../css/a/azko2ujod.css';
import '../../css/i/iflzd_h6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="venqq4bqz"/><path clip-rule="evenodd" class="u3u76o33j"/><path class="azko2ujod"/><path clip-rule="evenodd" class="iflzd_h6a"/></g>`,
		"fallback": "solar:airbuds-right-bold",
	});
}

export default Component;
