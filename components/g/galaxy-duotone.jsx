import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlq-gib-u.css';
import '../../css/w/w504wxbjp.css';
import '../../css/r/r524x5b2b.css';
import '../../css/h/h6sxiq-ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xlq-gib-u"/><path class="w504wxbjp"/><path class="r524x5b2b"/><path class="h6sxiq-ff"/></g>`,
		"fallback": "lucide-extended:galaxy-duotone",
	});
}

export default Component;
