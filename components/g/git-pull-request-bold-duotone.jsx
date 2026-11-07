import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5qboab5t.css';
import '../../css/o/oeh5lxbqa.css';
import '../../css/p/p03812bxn.css';
import '../../css/m/mnelrmb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5qboab5t"/><path clip-rule="evenodd" class="oeh5lxbqa"/><path clip-rule="evenodd" class="p03812bxn"/><path clip-rule="evenodd" class="mnelrmb_n"/>`,
		"fallback": "solar:git-pull-request-bold-duotone",
	});
}

export default Component;
