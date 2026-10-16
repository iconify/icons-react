import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilfmmujdl.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/q/qezh2bc3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilfmmujdl"/><path class="c65-ehvfy"/><path class="qezh2bc3t"/>`,
		"fallback": "energy-icons:containment-dome-48",
	});
}

export default Component;
