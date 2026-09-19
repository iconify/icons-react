import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/tad6x19rh.css';
import '../../css/c/cjd6r3oou.css';
import '../../css/i/i-lxrwbzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="tad6x19rh"/><path class="cjd6r3oou"/><path class="i-lxrwbzf"/></g>`,
		"fallback": "circle-flags:et-am",
	});
}

export default Component;
