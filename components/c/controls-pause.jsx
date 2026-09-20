import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0hoxwb5h.css';
import '../../css/f/flaqzebkm.css';
import '../../css/b/bl13z8bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0hoxwb5h"/><path class="flaqzebkm"/><path class="bl13z8bbg"/></g>`,
		"fallback": "streamline-ultimate-color:controls-pause",
	});
}

export default Component;
