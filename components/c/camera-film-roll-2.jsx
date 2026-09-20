import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfoduhbbs.css';
import '../../css/k/kksnzpblz.css';
import '../../css/j/jqan74oga.css';
import '../../css/m/my3wwmbdz.css';
import '../../css/q/qzaw6l1lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pfoduhbbs"/><path class="kksnzpblz"/><path class="jqan74oga"/><path class="my3wwmbdz"/><path class="qzaw6l1lc"/></g>`,
		"fallback": "streamline-cyber-color:camera-film-roll-2",
	});
}

export default Component;
