import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/iiwk4gbzg.css';
import '../../css/g/gjd4v-29w.css';
import '../../css/a/a_n8j3b6c.css';
import '../../css/a/aaqafkbkc.css';
import '../../css/i/i_0yzggcw.css';
import '../../css/o/o_4d2nb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="iiwk4gbzg"/><path class="gjd4v-29w"/><path class="a_n8j3b6c"/><path class="aaqafkbkc"/><path class="i_0yzggcw"/><path class="o_4d2nb2o"/></g>`,
		"fallback": "matita:cloud-rain",
	});
}

export default Component;
