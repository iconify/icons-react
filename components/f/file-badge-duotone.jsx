import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxtvgu7ud.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/o/ozy-73a9y.css';
import '../../css/h/hj-emab-q.css';
import '../../css/k/kqihe-_ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxtvgu7ud"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="ozy-73a9y"/><path class="hj-emab-q"/><path class="kqihe-_ot"/></g>`,
		"fallback": "lucide-extended:file-badge-duotone",
	});
}

export default Component;
