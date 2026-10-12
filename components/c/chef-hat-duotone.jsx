import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jp7iaxbkg.css';
import '../../css/y/ycbys76kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jp7iaxbkg"/><path class="ycbys76kd"/></g>`,
		"fallback": "lucide-extended:chef-hat-duotone",
	});
}

export default Component;
