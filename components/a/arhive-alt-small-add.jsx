import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qcs_7qqsg.css';
import '../../css/y/yury52rfs.css';
import '../../css/j/jdg3xy5_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="qcs_7qqsg"/><path class="yury52rfs"/><path class="jdg3xy5_p"/></g>`,
		"fallback": "lets-icons:arhive-alt-small-add",
	});
}

export default Component;
