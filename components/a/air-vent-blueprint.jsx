import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mh7vulbki.css';
import '../../css/d/dkdaame2f.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/e/eb6gvsk9e.css';
import '../../css/s/sz07cy4fi.css';
import '../../css/n/ne0tdm2tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mh7vulbki wm-deco"/><path class="dkdaame2f wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="eb6gvsk9e wm-k"/><path class="sz07cy4fi wm-a"/><path class="ne0tdm2tz wm-a"/></g>`,
		"fallback": "withicons:air-vent-blueprint",
	});
}

export default Component;
