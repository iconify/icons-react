import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u4sexs81j.css';
import '../../css/o/o79o6ib8v.css';
import '../../css/m/mg0dmqb6d.css';
import '../../css/t/tbxfsnbba.css';
import '../../css/c/c9plr8afj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="u4sexs81j"/><path class="o79o6ib8v"/><rect class="mg0dmqb6d"/><rect class="tbxfsnbba"/><path class="c9plr8afj"/></g>`,
		"fallback": "icon-park-outline:diving-bottle",
	});
}

export default Component;
