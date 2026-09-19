import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl3de0cko.css';
import '../../css/a/ayo-76b_t.css';
import '../../css/b/bswzncbox.css';
import '../../css/v/vs0cgob1u.css';
import '../../css/u/ut6993c_l.css';
import '../../css/v/vaz8dablx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl3de0cko"/><path class="ayo-76b_t"/><path class="bswzncbox"/><path class="vs0cgob1u"/><path class="ut6993c_l"/><path class="vaz8dablx"/>`,
		"fallback": "fxemoji:guitar",
	});
}

export default Component;
