import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/ne-y4bcan.css';
import '../../css/v/vnrhmrbcz.css';
import '../../css/c/c4w93dekp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGF704Bdhr"><g class="ufeehvblu"><path class="ne-y4bcan"/><path class="vnrhmrbcz"/><path clip-rule="evenodd" class="c4w93dekp"/></g></mask></defs><path mask="url(#SVGF704Bdhr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:financing-one",
	});
}

export default Component;
