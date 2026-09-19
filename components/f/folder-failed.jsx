import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/p/p6t1hvs_c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxvB3lded"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="p6t1hvs_c"/></g></mask></defs><path mask="url(#SVGxvB3lded)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-failed",
	});
}

export default Component;
