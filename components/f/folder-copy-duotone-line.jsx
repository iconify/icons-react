import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/r-yh56yds.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9g6mxqgk.css';
import '../../css/c/c6aay-bjb.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXDtb3xtW"><mask id="SVGWHgqpdDF" class="n1mjunbsu"><path class="r-yh56yds"/></mask><g class="ft5dv1b6b"><path mask="url(#SVGWHgqpdDF)" class="q9g6mxqgk"/><path class="c6aay-bjb"/></g></mask></defs><path mask="url(#SVGXDtb3xtW)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-copy-duotone-line",
	});
}

export default Component;
