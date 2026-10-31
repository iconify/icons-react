import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sl_fohx5d.css';
import '../../css/s/scv9d7bem.css';
import '../../css/a/a0o4ub92n.css';
import '../../css/u/ucogdbb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sl_fohx5d"/><path class="scv9d7bem"/><path class="a0o4ub92n"/><path class="ucogdbb3g"/></g>`,
		"fallback": "lucide-extended:database-cog-duotone",
	});
}

export default Component;
