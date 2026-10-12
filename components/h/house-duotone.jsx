import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as30jtb7v.css';
import '../../css/u/u9wh36b8p.css';
import '../../css/u/ui5ygsbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="as30jtb7v"/><path class="u9wh36b8p"/><path class="ui5ygsbnw"/></g>`,
		"fallback": "lucide-extended:house-duotone",
	});
}

export default Component;
