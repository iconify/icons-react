import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz9gb9bqr.css';
import '../../css/r/rndnw4b9p.css';
import '../../css/x/xray__lap.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uz9gb9bqr"/><path class="rndnw4b9p"/><path class="xray__lap"/>`,
		"fallback": "carbon:baggage-claim",
	});
}

export default Component;
