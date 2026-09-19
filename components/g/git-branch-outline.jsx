import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znzucvy4i.css';
import '../../css/c/csk7b4xky.css';
import '../../css/k/k2bg6dpyt.css';
import '../../css/f/ftdas6b_c.css';
import '../../css/s/sw-xt6bsx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="znzucvy4i"/><circle class="csk7b4xky"/><path class="k2bg6dpyt"/><circle class="ftdas6b_c"/><path class="sw-xt6bsx"/>`,
		"fallback": "ion:git-branch-outline",
	});
}

export default Component;
