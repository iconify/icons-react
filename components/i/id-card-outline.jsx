import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpam7qbjh.css';
import '../../css/h/h0x9monpf.css';
import '../../css/w/wbip20b7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="gpam7qbjh"/><path class="h0x9monpf"/><path class="wbip20b7n"/>`,
		"fallback": "ion:id-card-outline",
	});
}

export default Component;
