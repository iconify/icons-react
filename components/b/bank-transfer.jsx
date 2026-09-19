import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jz--rmbcb.css';
import '../../css/m/mvadfabkx.css';
import '../../css/l/lq3-qpbeu.css';
import '../../css/m/m8de0q6nv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRYblmcyU"><g class="ufeehvblu"><rect class="jz--rmbcb"/><path class="mvadfabkx"/><path class="lq3-qpbeu"/><path class="m8de0q6nv"/></g></mask></defs><path mask="url(#SVGRYblmcyU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bank-transfer",
	});
}

export default Component;
