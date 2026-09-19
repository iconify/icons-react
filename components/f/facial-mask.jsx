import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a7adl4bny.css';
import '../../css/e/ez_zj8b4g.css';
import '../../css/a/arg04jbjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2nJRFwcp"><g class="rohhhzb0l"><path class="a7adl4bny"/><path class="ez_zj8b4g"/><path class="arg04jbjn"/></g></mask></defs><path mask="url(#SVG2nJRFwcp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:facial-mask",
	});
}

export default Component;
