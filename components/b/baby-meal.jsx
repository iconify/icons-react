import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lrd2eebhv.css';
import '../../css/g/g3df0sqil.css';
import '../../css/z/zpli_odwl.css';
import '../../css/m/mqbmq9bdb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCfAp1dvB"><g class="rohhhzb0l"><path class="lrd2eebhv"/><path class="g3df0sqil"/><path class="zpli_odwl"/><path class="mqbmq9bdb"/></g></mask></defs><path mask="url(#SVGCfAp1dvB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-meal",
	});
}

export default Component;
