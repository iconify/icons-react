import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fn-pn3iwr.css';
import '../../css/i/ivc1evbro.css';
import '../../css/j/j6vd_eyyg.css';
import '../../css/t/tg567gbbd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="fn-pn3iwr"/><path class="ivc1evbro"/><path class="j6vd_eyyg"/><path class="tg567gbbd"/></g>`,
		"fallback": "streamline-plump-color:delete-row",
	});
}

export default Component;
