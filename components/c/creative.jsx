import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xdw2bdcxa.css';
import '../../css/t/tjohlwgfv.css';
import '../../css/u/uutusgtyk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaa06Tchr"><g class="ufeehvblu"><path class="xdw2bdcxa"/><path class="tjohlwgfv"/><path class="uutusgtyk"/></g></mask></defs><path mask="url(#SVGaa06Tchr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:creative",
	});
}

export default Component;
