import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmmt3ebdz.css';
import '../../css/f/ftjyp7crf.css';
import '../../css/q/qeutyabff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmmt3ebdz"/><path class="ftjyp7crf"/><path class="qeutyabff"/>`,
		"fallback": "energy-icons:gauge-48",
	});
}

export default Component;
