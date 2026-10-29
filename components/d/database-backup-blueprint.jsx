import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/voayg6-9d.css';
import '../../css/p/p7hy21fel.css';
import '../../css/d/d427oqbex.css';
import '../../css/c/c2iradyfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="voayg6-9d wm-deco"/><path class="p7hy21fel wm-deco"/><path class="d427oqbex"/><path class="c2iradyfa"/></g>`,
		"fallback": "withicons:database-backup-blueprint",
	});
}

export default Component;
