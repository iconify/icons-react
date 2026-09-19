import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4ggpyb0i.css';
import '../../css/i/it38-7bnt.css';
import '../../css/n/naknw2bbi.css';
import '../../css/k/kiyz6rbtz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDqtYLdbZ"><g class="ft5dv1b6b"><path class="t4ggpyb0i"/><path class="it38-7bnt"/><circle class="naknw2bbi"/><path class="kiyz6rbtz"/></g></mask></defs><path mask="url(#SVGDqtYLdbZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:blade",
	});
}

export default Component;
