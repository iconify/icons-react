import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/c/c6j5yyb2e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGil5VI8zv"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="c6j5yyb2e"/></g></mask></defs><path mask="url(#SVGil5VI8zv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:expressionless-face",
	});
}

export default Component;
