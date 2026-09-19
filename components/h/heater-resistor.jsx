import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/ah54-cccv.css';
import '../../css/c/cyf0llfok.css';
import '../../css/z/zxhwh9mgr.css';
import '../../css/u/uu8-2gbpn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgmrblevU"><g class="ufeehvblu"><rect transform="rotate(-45 9.858 29.657)" class="ah54-cccv"/><path class="cyf0llfok"/><path class="zxhwh9mgr"/><path class="uu8-2gbpn"/></g></mask></defs><path mask="url(#SVGgmrblevU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:heater-resistor",
	});
}

export default Component;
