import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g79xbo1hg.css';
import '../../css/i/ijgp7yb3n.css';
import '../../css/f/fbyge-9ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g79xbo1hg"/><path class="ijgp7yb3n"/><path class="fbyge-9ve"/></g>`,
		"fallback": "lucide-extended:badge-turkish-lira-duotone",
	});
}

export default Component;
