import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/hlrs57btb.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysbo01bxp.css';
import '../../css/u/uv9jbhbjz.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGByHzwd8G"><mask id="SVGdZSE3uWe" class="n1mjunbsu"><path class="hlrs57btb"/></mask><g class="ft5dv1b6b"><path class="ysbo01bxp"/><path mask="url(#SVGdZSE3uWe)" class="uv9jbhbjz"/></g></mask></defs><path mask="url(#SVGByHzwd8G)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-file-duotone-line",
	});
}

export default Component;
