import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9emg4bdv.css';
import '../../css/o/oxxoeqbsw.css';
import '../../css/q/qpk590b-s.css';
import '../../css/x/xcu8ss0py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9emg4bdv"/><path class="oxxoeqbsw"/><path class="qpk590b-s"/><path class="xcu8ss0py"/></g>`,
		"fallback": "keyline-icons:chart-column-sparkles-two-tone",
	});
}

export default Component;
