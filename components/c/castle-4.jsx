import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgca7vgmj.css';
import '../../css/s/st_nvnc2y.css';
import '../../css/s/sdpnk9gpp.css';
import '../../css/v/v9lseff7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vgca7vgmj"/><path class="st_nvnc2y"/><path class="sdpnk9gpp"/><path class="v9lseff7d"/></g>`,
		"fallback": "tdesign:castle-4",
	});
}

export default Component;
