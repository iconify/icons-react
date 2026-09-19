import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/z/z65cobbiw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVK1pAboS"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="z65cobbiw"/></g></mask></defs><path mask="url(#SVGVK1pAboS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:arrow-circle-left",
	});
}

export default Component;
