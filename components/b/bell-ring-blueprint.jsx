import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rs2xrkbna.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/a/az6nf_bxe.css';
import '../../css/s/shte9bcuj.css';
import '../../css/u/up4lun9xh.css';
import '../../css/u/u46tsabph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rs2xrkbna wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="az6nf_bxe wm-k"/><path class="shte9bcuj wm-a"/><path class="up4lun9xh wm-s"/><path class="u46tsabph wm-k"/></g>`,
		"fallback": "withicons:bell-ring-blueprint",
	});
}

export default Component;
