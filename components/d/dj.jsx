import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/tmevkm75x.css';
import '../../css/u/uwfr6-b9e.css';
import '../../css/z/z19bf84dj.css';
import '../../css/n/nql8tgo6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="tmevkm75x"/><path class="uwfr6-b9e"/><path class="z19bf84dj"/><path class="nql8tgo6e"/></g>`,
		"fallback": "circle-flags:dj",
	});
}

export default Component;
