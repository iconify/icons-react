import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/asa01hbws.css';
import '../../css/e/et-ay3bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="asa01hbws"/><path class="et-ay3bve"/></g>`,
		"fallback": "hugeicons:delete-put-back",
	});
}

export default Component;
