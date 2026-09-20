import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4lm9rt0w.css';
import '../../css/p/p8yolrbml.css';
import '../../css/f/fquez4bpm.css';
import '../../css/m/musami3uq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4lm9rt0w"/><path class="p8yolrbml"/><path class="fquez4bpm"/><path class="musami3uq"/></g>`,
		"fallback": "streamline-color:compass-navigator",
	});
}

export default Component;
