import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0a45tbbt.css';
import '../../css/x/xgu-htb9s.css';
import '../../css/g/gytfce5tm.css';
import '../../css/r/rdnvirs_r.css';
import '../../css/k/kjvydr1yr.css';
import '../../css/d/dfiu8ttcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0a45tbbt"/><path class="xgu-htb9s"/><path class="gytfce5tm"/><path class="rdnvirs_r"/><path class="kjvydr1yr"/><path class="dfiu8ttcl"/>`,
		"fallback": "solar:barcode-scan-bold-duotone",
	});
}

export default Component;
