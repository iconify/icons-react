import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vrf4c8bku.css';
import '../../css/q/q7b-qqb7o.css';
import '../../css/f/fjfqhmcai.css';
import '../../css/f/fopwb5vtp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vrf4c8bku"/><path class="q7b-qqb7o"/><path class="fjfqhmcai"/><path class="fopwb5vtp"/></g>`,
		"fallback": "icon-park:email-down",
	});
}

export default Component;
