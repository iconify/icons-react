import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0_extypk.css';
import '../../css/p/pr5pgxb-z.css';
import '../../css/t/twxyyfbyf.css';
import '../../css/u/u6uyuab6r.css';
import '../../css/d/daw7yflav.css';
import '../../css/y/yl_s93czd.css';
import '../../css/p/phr03hb1k.css';
import '../../css/b/bfsk06z5k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0_extypk"/><path class="pr5pgxb-z"/><path class="twxyyfbyf"/><path class="u6uyuab6r"/><path class="daw7yflav"/><path class="yl_s93czd"/><path class="phr03hb1k"/><path class="bfsk06z5k"/>`,
		"fallback": "openmoji:girl-light-skin-tone",
	});
}

export default Component;
