import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/o2eglx49u.css';
import '../../css/j/ji7at9p2i.css';
import '../../css/s/su4ecrboc.css';
import '../../css/b/bnlhbtbjz.css';
import '../../css/w/wi3sb5hft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="o2eglx49u"/><path class="ji7at9p2i"/><path class="su4ecrboc"/><path class="bnlhbtbjz"/><path class="wi3sb5hft"/></g>`,
		"fallback": "circle-flags:et-sw",
	});
}

export default Component;
