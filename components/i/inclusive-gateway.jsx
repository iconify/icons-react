import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/use6smbve.css';
import '../../css/h/hbc-02bvv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="use6smbve"/><path class="hbc-02bvv"/></g>`,
		"fallback": "icon-park:inclusive-gateway",
	});
}

export default Component;
