import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-300obtu.css';
import '../../css/w/we0xbxfdt.css';
import '../../css/s/shaiqxb2f.css';
import '../../css/c/clim4d_fk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-300obtu"/><path class="we0xbxfdt"/><path class="shaiqxb2f"/><path class="clim4d_fk"/>`,
		"fallback": "energy-icons:compressed-air-20",
	});
}

export default Component;
