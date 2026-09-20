import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad_2hbbu.css';
import '../../css/e/eoy1so5qh.css';
import '../../css/j/jpa441bvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGqcchnezh" x1="256.002" x2="256.002" y1="432.036" y2="787.262" gradientTransform="translate(0 -279)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mad_2hbbu"/><stop offset="1" class="eoy1so5qh"/></linearGradient><path fill="url(#SVGqcchnezh)" class="jpa441bvf"/>`,
		"fallback": "selfhst:grafana",
	});
}

export default Component;
