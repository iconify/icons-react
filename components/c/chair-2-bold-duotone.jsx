import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehwnvf9aj.css';
import '../../css/r/rbud-acqg.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d5a-axoez.css';
import '../../css/p/prv4iebuw.css';
import '../../css/a/aeb0jzmcy.css';
import '../../css/n/nvlo4nbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ehwnvf9aj"/><path class="rbud-acqg"/><g class="mc2zb0bvp"><path class="d5a-axoez"/><path class="prv4iebuw"/><path class="aeb0jzmcy"/><path class="nvlo4nbyy"/></g></g>`,
		"fallback": "solar:chair-2-bold-duotone",
	});
}

export default Component;
