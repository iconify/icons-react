import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x86vvbccz.css';
import '../../css/m/mz-ceqb_o.css';
import '../../css/d/d9rb_abpc.css';
import '../../css/j/jzrv5hbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x86vvbccz"/><rect class="mz-ceqb_o"/><path class="d9rb_abpc"/><path class="jzrv5hbuc"/></g>`,
		"fallback": "evicons:destination-charging",
	});
}

export default Component;
