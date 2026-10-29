import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mpgrsdwrf.css';
import '../../css/d/dk4za7bzt.css';
import '../../css/k/knq75eb6v.css';
import '../../css/s/s37zulbpr.css';
import '../../css/p/ph19weu1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mpgrsdwrf wm-deco"/><path class="dk4za7bzt wm-deco"/><path class="knq75eb6v wm-k"/><path class="s37zulbpr wm-a"/><path class="ph19weu1z wm-k"/></g>`,
		"fallback": "withicons:bed-blueprint",
	});
}

export default Component;
