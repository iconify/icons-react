import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/x/x8kohn54s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTYoaacMU"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="x8kohn54s"/></g></mask></defs><path mask="url(#SVGTYoaacMU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:circle-double-down",
	});
}

export default Component;
