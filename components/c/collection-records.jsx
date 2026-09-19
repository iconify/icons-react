import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bnodaob4x.css';
import '../../css/w/wmhdlspux.css';
import '../../css/z/zw3ktw8jt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTTivlu9X"><g class="rohhhzb0l"><path class="bnodaob4x"/><path class="wmhdlspux"/><path class="zw3ktw8jt"/></g></mask></defs><path mask="url(#SVGTTivlu9X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:collection-records",
	});
}

export default Component;
