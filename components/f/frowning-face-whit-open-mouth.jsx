import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/u/u6df5xh0x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaHcRUcLK"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="u6df5xh0x"/></g></mask></defs><path mask="url(#SVGaHcRUcLK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:frowning-face-whit-open-mouth",
	});
}

export default Component;
