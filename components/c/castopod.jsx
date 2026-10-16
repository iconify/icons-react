import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsm4e0bue.css';
import '../../css/b/bu7uf3bkq.css';
import '../../css/p/p0z59inze.css';
import '../../css/x/x__xt5bdg.css';

const viewBox = {"width":59,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsm4e0bue"/><path class="bu7uf3bkq"/><path class="p0z59inze"/><path class="x__xt5bdg"/>`,
		"fallback": "thesvg-color:castopod",
	});
}

export default Component;
