import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/x44bfmbwq.css';
import '../../css/o/ohqv07ktw.css';
import '../../css/r/rbw0mx1jr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhfz8cZWl"><g class="ufeehvblu"><path class="x44bfmbwq"/><path class="ohqv07ktw"/><path class="rbw0mx1jr"/></g></mask></defs><path mask="url(#SVGhfz8cZWl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:aperture-priority",
	});
}

export default Component;
