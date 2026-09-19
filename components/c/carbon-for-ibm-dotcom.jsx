import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh_nadcab.css';
import '../../css/u/ub4d63l7m.css';
import '../../css/k/k43y_he5a.css';
import '../../css/k/kaisiyc_s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh_nadcab"/><circle class="ub4d63l7m"/><circle class="k43y_he5a"/><path class="kaisiyc_s"/>`,
		"fallback": "carbon:carbon-for-ibm-dotcom",
	});
}

export default Component;
