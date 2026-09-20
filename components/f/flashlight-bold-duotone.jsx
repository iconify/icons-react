import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/tkmm4m1rs.css';
import '../../css/w/wwmg4rbvg.css';
import '../../css/v/v0kewbcow.css';
import '../../css/c/cqnshxblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="tkmm4m1rs"/><path class="wwmg4rbvg"/></g><path class="v0kewbcow"/><path class="cqnshxblb"/></g>`,
		"fallback": "solar:flashlight-bold-duotone",
	});
}

export default Component;
