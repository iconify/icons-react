import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/gmgyw26if.css';
import '../../css/l/l0-geycet.css';
import '../../css/h/hpkx9vbiv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="gmgyw26if"/><path class="l0-geycet"/><path class="hpkx9vbiv"/></g>`,
		"fallback": "circle-flags:hn",
	});
}

export default Component;
