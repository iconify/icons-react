import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eivil5x4j.css';
import '../../css/a/acg_ub67k.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMdgKseHX"><g class="ft5dv1b6b"><path class="eivil5x4j"/><path class="acg_ub67k"/></g></mask></defs><path mask="url(#SVGMdgKseHX)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folders-line-duotone-line",
	});
}

export default Component;
