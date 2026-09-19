import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asfn5lk4k.css';
import '../../css/i/igjto1rli.css';
import '../../css/e/edx263bbt.css';
import '../../css/w/wazb7-b6w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZYFZ5bDn"><g class="ft5dv1b6b"><path class="asfn5lk4k"/><path class="igjto1rli"/><path clip-rule="evenodd" class="edx263bbt"/><path class="wazb7-b6w"/></g></mask></defs><path mask="url(#SVGZYFZ5bDn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circle-four-line",
	});
}

export default Component;
