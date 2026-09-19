import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/m/mh64p_bcl.css';
import '../../css/n/na8ucjw-y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaOxgXc8s"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="mh64p_bcl"/><path class="na8ucjw-y"/></g></mask></defs><path mask="url(#SVGaOxgXc8s)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-close",
	});
}

export default Component;
