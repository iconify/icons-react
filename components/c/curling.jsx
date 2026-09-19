import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4e4mlb2g.css';
import '../../css/b/ble3jubnc.css';
import '../../css/s/shz9zobhz.css';
import '../../css/i/ijohicbrj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuu9naeee"><g class="u4e4mlb2g"><path class="ble3jubnc"/><path class="shz9zobhz"/><path class="ijohicbrj"/></g></mask></defs><path mask="url(#SVGuu9naeee)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:curling",
	});
}

export default Component;
