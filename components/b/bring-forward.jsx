import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/uhu3rufxu.css';
import '../../css/m/m4_avabyo.css';
import '../../css/g/gufx1_bfw.css';
import '../../css/a/a6ebqputa.css';
import '../../css/i/i9c09ib2l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="uhu3rufxu"/><rect class="m4_avabyo"/><path class="gufx1_bfw"/><path class="a6ebqputa"/><path class="i9c09ib2l"/></g>`,
		"fallback": "icon-park:bring-forward",
	});
}

export default Component;
