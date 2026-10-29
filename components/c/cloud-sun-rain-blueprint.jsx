import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/ps9yt4x-f.css';
import '../../css/e/eoqwkvbie.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/b/brejjgbmj.css';
import '../../css/p/pf05l3ymp.css';
import '../../css/d/dkfws9ftw.css';
import '../../css/j/js6dqit3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ps9yt4x-f wm-deco"/><path class="eoqwkvbie wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="brejjgbmj wm-k"/><path class="pf05l3ymp wm-a"/><path class="dkfws9ftw wm-s"/><path class="js6dqit3x wm-k"/></g>`,
		"fallback": "withicons:cloud-sun-rain-blueprint",
	});
}

export default Component;
