import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2k2x1brr.css';
import '../../css/j/ju5xpqb-g.css';
import '../../css/b/bmpcg_blp.css';
import '../../css/o/ojtpn99ye.css';
import '../../css/e/evgr_kbls.css';
import '../../css/m/mg6fsrpaa.css';
import '../../css/a/azuvv3bin.css';
import '../../css/h/hnw1dm0_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2k2x1brr"/><path class="ju5xpqb-g"/><path class="bmpcg_blp"/><path class="ojtpn99ye"/><path class="evgr_kbls"/><path class="mg6fsrpaa"/><path class="azuvv3bin"/><path class="hnw1dm0_u"/>`,
		"fallback": "streamline-emojis:credit-card",
	});
}

export default Component;
