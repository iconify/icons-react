import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/c6jtjthhk.css';
import '../../css/f/fcu8rib6g.css';
import '../../css/n/ntbo-qb0z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzvT79cfR"><g class="ufeehvblu"><path class="c6jtjthhk"/><path class="fcu8rib6g"/><path class="ntbo-qb0z"/></g></mask></defs><path mask="url(#SVGzvT79cfR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alarm-clock",
	});
}

export default Component;
