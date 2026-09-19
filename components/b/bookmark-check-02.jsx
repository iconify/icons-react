import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dn7tk1h8a.css';
import '../../css/r/r59y2ubhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dn7tk1h8a"/><path class="r59y2ubhf"/></g>`,
		"fallback": "hugeicons:bookmark-check-02",
	});
}

export default Component;
