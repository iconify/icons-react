import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/a459j710d.css';
import '../../css/c/cij84tb7u.css';
import '../../css/k/kvyfy0aym.css';
import '../../css/v/v9zcxtbjw.css';
import '../../css/w/w2clp_a8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="a459j710d"/><path class="cij84tb7u"/><circle class="kvyfy0aym"/><circle class="v9zcxtbjw"/><path class="w2clp_a8v"/></g>`,
		"fallback": "icon-park-outline:gift-bag",
	});
}

export default Component;
