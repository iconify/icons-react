import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hm_59sbho.css';
import '../../css/x/x1ct8yiis.css';
import '../../css/x/xcz9gzhia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hm_59sbho"/><path class="x1ct8yiis"/><path class="xcz9gzhia"/></g>`,
		"fallback": "thesvg-color:glama",
	});
}

export default Component;
