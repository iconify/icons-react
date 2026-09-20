import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgafedb3r.css';
import '../../css/g/gvcogmvwd.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxuwandbd"><g class="ft5dv1b6b"><path class="qgafedb3r"/><path class="gvcogmvwd"/></g></mask></defs><path mask="url(#SVGxuwandbd)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:comment-duotone-line",
	});
}

export default Component;
