import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rj7asqb0c.css';
import '../../css/s/szngjzbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rj7asqb0c"/><path class="szngjzbcd"/></g>`,
		"fallback": "hugeicons:disability-01",
	});
}

export default Component;
