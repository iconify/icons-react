import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/q6g5cubep.css';
import '../../css/w/w2_-20bdu.css';
import '../../css/d/dhve7w4yl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect transform="rotate(90 30 10)" class="q6g5cubep"/><path class="w2_-20bdu"/><path class="dhve7w4yl"/></g>`,
		"fallback": "icon-park:distribute-horizontally",
	});
}

export default Component;
