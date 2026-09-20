import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c21nnnwjm.css';
import '../../css/c/cwmzxgbha.css';
import '../../css/e/efak_bbhr.css';
import '../../css/j/jhqgpel6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="c21nnnwjm"/><path class="cwmzxgbha"/><path class="efak_bbhr"/><path class="jhqgpel6v"/></g>`,
		"fallback": "lets-icons:arhive-alt-add-list-light",
	});
}

export default Component;
