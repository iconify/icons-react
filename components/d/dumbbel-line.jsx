import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nv8m9z70c.css';
import '../../css/g/gsld83n9s.css';
import '../../css/z/zbcdxkbim.css';
import '../../css/v/v_valmbns.css';
import '../../css/v/v135rccmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nv8m9z70c"/><path class="gsld83n9s"/><path class="zbcdxkbim"/><path class="v_valmbns"/><path class="v135rccmj"/></g>`,
		"fallback": "icon-park:dumbbel-line",
	});
}

export default Component;
