import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlfydfsvz.css';
import '../../css/e/ebt4li8wi.css';
import '../../css/i/iazxeobtk.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXjkvuc6g"><g class="ft5dv1b6b"><path class="vlfydfsvz"/><path class="ebt4li8wi"/><path class="iazxeobtk"/></g></mask></defs><path mask="url(#SVGXjkvuc6g)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-file-alt-duotone-line",
	});
}

export default Component;
