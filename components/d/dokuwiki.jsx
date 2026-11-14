import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhhnylclq.css';
import '../../css/s/swsfj8b4r.css';
import '../../css/l/l2ylshpug.css';
import '../../css/y/y05yz_bzk.css';
import '../../css/p/p2y4zf_7t.css';
import '../../css/w/we03z7ntr.css';
import '../../css/v/vkzzy70fh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhhnylclq"/><path class="swsfj8b4r"/><path class="l2ylshpug"/><path class="y05yz_bzk"/><path class="p2y4zf_7t"/><path class="we03z7ntr"/><path class="vkzzy70fh"/>`,
		"fallback": "selfhst:dokuwiki",
	});
}

export default Component;
