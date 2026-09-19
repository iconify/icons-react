import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/o/o-80ifbtp.css';
import '../../css/o/o40gyoiqb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="o-80ifbtp"/><circle class="o40gyoiqb"/></g>`,
		"fallback": "icon-park:folder-music-one",
	});
}

export default Component;
