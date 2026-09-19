import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h81763tap.css';
import '../../css/c/c2hv9xb1d.css';
import '../../css/u/u5-h3fc2g.css';
import '../../css/h/hoc1klz7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="h81763tap"/><path class="c2hv9xb1d"/><path class="u5-h3fc2g"/><path class="hoc1klz7p"/></g>`,
		"fallback": "hugeicons:database-sync-01",
	});
}

export default Component;
