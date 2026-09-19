import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/y/yfrru90nb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3GkUwb1U"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="yfrru90nb"/></g></mask></defs><path mask="url(#SVG3GkUwb1U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:circle-double-left",
	});
}

export default Component;
