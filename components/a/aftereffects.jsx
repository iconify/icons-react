import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe2kkz7uf.css';
import '../../css/d/dbikkebwp.css';
import '../../css/m/ms5yux87p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe2kkz7uf"/><path class="dbikkebwp"/><path class="ms5yux87p"/>`,
		"fallback": "devicon:aftereffects",
	});
}

export default Component;
