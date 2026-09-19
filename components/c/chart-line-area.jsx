import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/oan152bkl.css';
import '../../css/v/v3sybybfr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGG6xKxdRX"><g class="v3_i3wktz"><path class="oan152bkl"/><path class="v3sybybfr"/></g></mask></defs><path mask="url(#SVGG6xKxdRX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chart-line-area",
	});
}

export default Component;
