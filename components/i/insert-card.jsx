import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nvjxntb_m.css';
import '../../css/f/fopngibfa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzW6Fdctb"><g class="v3_i3wktz"><path class="nvjxntb_m"/><path class="fopngibfa"/></g></mask></defs><path mask="url(#SVGzW6Fdctb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:insert-card",
	});
}

export default Component;
