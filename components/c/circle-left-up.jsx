import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/c/c-4r8eboa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6M3bBddv"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="c-4r8eboa"/></g></mask></defs><path mask="url(#SVG6M3bBddv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:circle-left-up",
	});
}

export default Component;
