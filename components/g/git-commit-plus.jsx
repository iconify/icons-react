import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzfpdbbvq.css';
import '../../css/l/lnru1zztp.css';
import '../../css/g/gl7lpebjn.css';
import '../../css/m/mqe2qx3yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xzfpdbbvq"/><path class="lnru1zztp"/><circle class="gl7lpebjn"/><path class="mqe2qx3yv"/></g>`,
		"fallback": "andrsrxn:git-commit-plus",
	});
}

export default Component;
