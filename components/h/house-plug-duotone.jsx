import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5tvk7p6f.css';
import '../../css/p/p4xnfxtlo.css';
import '../../css/m/mpi_84bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v5tvk7p6f"/><path class="p4xnfxtlo"/><path class="mpi_84bjp"/></g>`,
		"fallback": "lucide-extended:house-plug-duotone",
	});
}

export default Component;
