import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytbycmbow.css';
import '../../css/p/pdg9b4a_z.css';
import '../../css/r/rh-4j1bun.css';
import '../../css/u/ubj4yi1zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytbycmbow"/><path class="pdg9b4a_z"/><path class="rh-4j1bun"/><path class="ubj4yi1zs"/></g>`,
		"fallback": "lucide-extended:hockey-stick-duotone",
	});
}

export default Component;
