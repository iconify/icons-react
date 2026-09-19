import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/d/dg3mn7bsj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGj5QrybRn"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="dg3mn7bsj"/></g></mask></defs><path mask="url(#SVGj5QrybRn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:grinning-face-with-tightly-closed-eyes-open-mouth",
	});
}

export default Component;
