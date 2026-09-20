import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/a/ankf2q52p.css';
import '../../css/s/s7rka1x5f.css';
import '../../css/i/iyts88baw.css';
import '../../css/f/f9o4fmbpo.css';
import '../../css/l/l0bx7gbob.css';
import '../../css/p/poq1f8bkv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="ankf2q52p"/><path class="s7rka1x5f"/><path class="iyts88baw"/><path class="f9o4fmbpo"/><path class="l0bx7gbob"/><path class="poq1f8bkv"/></g>`,
		"fallback": "skill-icons:dart-dark",
	});
}

export default Component;
