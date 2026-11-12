import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad_2hbbu.css';
import '../../css/e/eoy1so5qh.css';
import '../../css/h/h9250idgn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGx3KOLdgt" x1="256" x2="256" y1="153" y2="508.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="mad_2hbbu"/><stop offset="1" class="eoy1so5qh"/></linearGradient><path fill="url(#SVGx3KOLdgt)" class="h9250idgn"/>`,
		"fallback": "selfhst:grafana",
	});
}

export default Component;
