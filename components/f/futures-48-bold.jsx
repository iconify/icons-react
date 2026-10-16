import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv_yx13wf.css';
import '../../css/q/qllhpcbbe.css';
import '../../css/i/icx4yywmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv_yx13wf"/><path class="qllhpcbbe"/><path class="icx4yywmx"/>`,
		"fallback": "energy-icons:futures-48-bold",
	});
}

export default Component;
