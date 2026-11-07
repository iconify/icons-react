import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laypnctxv.css';
import '../../css/p/pqht0qb6q.css';
import '../../css/e/eb9uwtqnk.css';
import '../../css/f/fwy-nwbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="laypnctxv"/><path clip-rule="evenodd" class="pqht0qb6q"/><path class="eb9uwtqnk"/><path clip-rule="evenodd" class="fwy-nwbmu"/>`,
		"fallback": "solar:bedside-table-bold-duotone",
	});
}

export default Component;
