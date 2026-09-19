import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h2irm-buk.css';
import '../../css/a/anlsgyehl.css';
import '../../css/g/gsld83n9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="h2irm-buk"/><circle class="anlsgyehl"/><path class="gsld83n9s"/></g>`,
		"fallback": "icon-park:division",
	});
}

export default Component;
