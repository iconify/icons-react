import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aly3ipb5i.css';
import '../../css/o/oly-m626v.css';
import '../../css/q/qt56rzevo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aly3ipb5i"/><path class="oly-m626v"/><path class="qt56rzevo"/></g>`,
		"fallback": "lucide-extended:hard-drive-download-duotone",
	});
}

export default Component;
