import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6y04tvey.css';
import '../../css/h/heknmubqx.css';
import '../../css/v/vyz1xubip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g6y04tvey"/><path class="heknmubqx"/><path class="vyz1xubip"/></g>`,
		"fallback": "reicon:bag-tick2",
	});
}

export default Component;
