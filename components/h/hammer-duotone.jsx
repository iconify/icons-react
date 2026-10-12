import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ste35xvlg.css';
import '../../css/h/hlb_npbvv.css';
import '../../css/w/wpwd_2bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ste35xvlg"/><path class="hlb_npbvv"/><path class="wpwd_2bno"/></g>`,
		"fallback": "lucide-extended:hammer-duotone",
	});
}

export default Component;
