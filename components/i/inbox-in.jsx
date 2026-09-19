import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zefeifmbu.css';
import '../../css/s/s89ui8avr.css';
import '../../css/i/ivigeonoh.css';
import '../../css/q/qxmsexbvt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="zefeifmbu"/><path class="s89ui8avr"/><path class="ivigeonoh"/><path class="qxmsexbvt"/></g>`,
		"fallback": "icon-park:inbox-in",
	});
}

export default Component;
