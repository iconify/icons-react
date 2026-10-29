import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i7d-l7boy.css';
import '../../css/w/wv48do-2h.css';
import '../../css/v/vwwgmgu1c.css';
import '../../css/v/vasg407ef.css';
import '../../css/m/m-jk49bfk.css';
import '../../css/n/nnpxqacox.css';
import '../../css/g/geo64bcqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i7d-l7boy wm-deco"/><path class="wm-deco wv48do-2h"/><path class="vwwgmgu1c wm-deco"/><path class="vasg407ef wm-k"/><path class="m-jk49bfk wm-a"/><path class="nnpxqacox wm-k"/><path class="geo64bcqm wm-a"/></g>`,
		"fallback": "withicons:droplets-blueprint",
	});
}

export default Component;
