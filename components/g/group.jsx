import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl9hcebao.css';
import '../../css/j/j2vkrw2rq.css';
import '../../css/g/gv6tiib9t.css';
import '../../css/x/x7jcu8bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gl9hcebao"/><path class="j2vkrw2rq"/><path class="gv6tiib9t"/><path class="x7jcu8bha"/></g>`,
		"fallback": "lets-icons:group",
	});
}

export default Component;
