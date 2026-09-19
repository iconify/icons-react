import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/i/ims90xbdy.css';
import '../../css/l/l2kjf2wpr.css';
import '../../css/v/vz_stbcqh.css';
import '../../css/g/gbd0wm-ov.css';
import '../../css/k/kf6-d7bht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ims90xbdy"/><path class="l2kjf2wpr"/><path class="vz_stbcqh"/><path class="gbd0wm-ov"/><path class="kf6-d7bht"/></g>`,
		"fallback": "icon-park:envelope-one",
	});
}

export default Component;
