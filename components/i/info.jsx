import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqx9rpnoy.css';
import '../../css/t/txn-vvbbr.css';
import '../../css/d/d21rknbda.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGX9qUOAmp"><g class="ft5dv1b6b"><path class="mqx9rpnoy"/><path clip-rule="evenodd" class="txn-vvbbr"/><path class="d21rknbda"/></g></mask></defs><path mask="url(#SVGX9qUOAmp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:info",
	});
}

export default Component;
