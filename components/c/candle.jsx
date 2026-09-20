import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/agk-obbet.css';
import '../../css/r/rpirw-bwd.css';
import '../../css/l/llgl5fbte.css';
import '../../css/q/q8b0mnbiz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="agk-obbet"/><path class="rpirw-bwd"/><path class="llgl5fbte"/><path class="q8b0mnbiz"/></g>`,
		"fallback": "streamline-plump-color:candle",
	});
}

export default Component;
