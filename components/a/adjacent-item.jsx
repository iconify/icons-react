import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex0re0kub.css';
import '../../css/f/f31473-bi.css';
import '../../css/n/n-s0fvqfw.css';
import '../../css/k/kjv48vx0m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVuIdSd6J"><g class="ft5dv1b6b"><path class="ex0re0kub"/><path class="f31473-bi"/><path class="n-s0fvqfw"/><path class="kjv48vx0m"/></g></mask></defs><path mask="url(#SVGVuIdSd6J)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:adjacent-item",
	});
}

export default Component;
