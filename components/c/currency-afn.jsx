import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idgzbkb5s.css';
import '../../css/d/dmv258b4d.css';
import '../../css/q/qa2cdb8_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idgzbkb5s"/><path class="dmv258b4d"/><path class="qa2cdb8_f"/></g>`,
		"fallback": "andrsrxn:currency-afn",
	});
}

export default Component;
