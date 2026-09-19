import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/s_-5j122q.css';
import '../../css/m/m2wq_om6p.css';
import '../../css/a/afv00ivxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="s_-5j122q"/><path class="m2wq_om6p"/><path class="afv00ivxt"/></g>`,
		"fallback": "circle-flags:cl",
	});
}

export default Component;
