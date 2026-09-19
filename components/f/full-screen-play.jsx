import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zqp5lnbil.css';
import '../../css/e/e4vcug-lw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGi8dckb7P"><g class="v3_i3wktz"><path class="zqp5lnbil"/><path class="e4vcug-lw"/></g></mask></defs><path mask="url(#SVGi8dckb7P)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:full-screen-play",
	});
}

export default Component;
