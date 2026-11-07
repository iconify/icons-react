import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gsp36vw2y.css';
import '../../css/r/r97ddeb_j.css';
import '../../css/q/qw59k8t0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gsp36vw2y"/><path class="r97ddeb_j"/><path class="qw59k8t0z"/></g>`,
		"fallback": "solar:gallery-remove-broken",
	});
}

export default Component;
