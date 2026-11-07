import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w90nt2dmo.css';
import '../../css/n/nlom9l3_e.css';
import '../../css/p/py9i3uwid.css';
import '../../css/l/low_-zbeg.css';
import '../../css/y/y9szusbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="w90nt2dmo"/><path class="nlom9l3_e"/></g><path class="py9i3uwid"/><path class="low_-zbeg"/><path class="y9szusbfk"/>`,
		"fallback": "solar:bedside-table-4-bold-duotone",
	});
}

export default Component;
