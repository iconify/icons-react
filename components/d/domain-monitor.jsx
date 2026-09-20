import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12qm0bek.css';
import '../../css/n/n8njst_bx.css';
import '../../css/n/nkqt--bvr.css';
import '../../css/t/tbwsaot4u.css';
import '../../css/j/jzplx04wq.css';
import '../../css/e/e6lz-buqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12qm0bek"/><path class="n8njst_bx"/><circle class="nkqt--bvr"/><path class="tbwsaot4u"/><path class="jzplx04wq"/><path class="e6lz-buqx"/>`,
		"fallback": "selfhst:domain-monitor",
	});
}

export default Component;
