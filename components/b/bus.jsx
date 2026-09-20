import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l0o_79hvy.css';
import '../../css/i/icnhinblg.css';
import '../../css/m/mthm-ftsf.css';
import '../../css/i/ieqf_jbnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="l0o_79hvy"/><path class="icnhinblg"/><path class="mthm-ftsf"/><path class="ieqf_jbnc"/></g>`,
		"fallback": "streamline-plump-color:bus",
	});
}

export default Component;
