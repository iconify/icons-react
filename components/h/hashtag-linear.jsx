import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hyjon0btb.css';
import '../../css/t/t1in8db2h.css';
import '../../css/s/s41he0bba.css';
import '../../css/m/m-5zcvb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hyjon0btb"/><path class="t1in8db2h"/><path class="s41he0bba"/><path class="m-5zcvb8c"/></g>`,
		"fallback": "solar:hashtag-linear",
	});
}

export default Component;
