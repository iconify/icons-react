import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfsg-tbww.css';
import '../../css/m/mad_2hbbu.css';
import '../../css/n/nik-3sbnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGIKlvidax" x1="708.067" x2="114.307" y1="410.748" y2="227.6" gradientTransform="matrix(1 0 0 -1 0 514.83)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mfsg-tbww"/><stop offset="1" class="mad_2hbbu"/></linearGradient><path fill="url(#SVGIKlvidax)" class="nik-3sbnx"/>`,
		"fallback": "selfhst:grafana-tempo",
	});
}

export default Component;
