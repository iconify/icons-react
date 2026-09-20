import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/l/ld9s1i.css';
import '../../css/y/ydovum.css';
import '../../css/r/rje0ii.css';
import '../../css/y/y4wbml.css';
import '../../css/u/ul_dtz.css';
import '../../css/n/n-nlhg.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-cfpe7y.css';
import '../../css/d/d-p1facq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew ld9s1i ydovum"/><path class="iw1iew rje0ii y4wbml"/><path class="iw1iew ul_dtz y4wbml"/><path class="n-nlhg ydovum"/>`,
		"fallback": "line-md:emoji-grin-twotone",
	});
}

export default Component;
