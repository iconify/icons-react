import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bh_y89zfc.css';
import '../../css/g/gcqt0jbmj.css';
import '../../css/b/byxdlpbyc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMTragcDv"><g class="rohhhzb0l"><path class="bh_y89zfc"/><path class="gcqt0jbmj"/><path class="byxdlpbyc"/></g></mask></defs><path mask="url(#SVGMTragcDv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cake",
	});
}

export default Component;
