import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hyjon0btb.css';
import '../../css/t/t1in8db2h.css';
import '../../css/o/ogw7e4m-c.css';
import '../../css/f/fpn8si0az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hyjon0btb"/><path class="t1in8db2h"/><path class="ogw7e4m-c"/><path class="fpn8si0az"/></g>`,
		"fallback": "solar:hashtag-line-duotone",
	});
}

export default Component;
