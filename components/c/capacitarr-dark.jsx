import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k77157k9j.css';
import '../../css/p/puppv7bdy.css';
import '../../css/u/u-yc98b4d.css';
import '../../css/j/jjjnq-ygw.css';
import '../../css/t/tnmdrdice.css';
import '../../css/y/ywpm2tb1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k77157k9j"/><circle class="puppv7bdy"/><path class="u-yc98b4d"/><path class="jjjnq-ygw"/><path class="tnmdrdice"/><circle class="ywpm2tb1g"/>`,
		"fallback": "selfhst:capacitarr-dark",
	});
}

export default Component;
