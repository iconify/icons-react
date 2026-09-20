import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfsg-tbww.css';
import '../../css/m/mad_2hbbu.css';
import '../../css/f/fi5bwcx5m.css';

const viewBox = {"width":256,"height":279};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGzNMMBeHh" x1="49.995%" x2="49.995%" y1="122.45%" y2="31.139%"><stop offset="0%" class="mfsg-tbww"/><stop offset="100%" class="mad_2hbbu"/></linearGradient></defs><path fill="url(#SVGzNMMBeHh)" class="fi5bwcx5m"/>`,
		"fallback": "thesvg-color:grafana",
	});
}

export default Component;
