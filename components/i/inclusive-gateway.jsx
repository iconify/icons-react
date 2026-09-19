import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lhob5rbnu.css';
import '../../css/u/uiygcpbmv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPZeTfe3m"><g class="ufeehvblu"><path class="lhob5rbnu"/><path class="uiygcpbmv"/></g></mask></defs><path mask="url(#SVGPZeTfe3m)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:inclusive-gateway",
	});
}

export default Component;
