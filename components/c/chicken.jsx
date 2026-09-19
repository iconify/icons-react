import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o45hcwbiq.css';
import '../../css/u/uzkx0rksu.css';
import '../../css/q/qra4v06lc.css';
import '../../css/e/ecihrq6mt.css';
import '../../css/i/itikrg95t.css';
import '../../css/s/sl-ihibsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o45hcwbiq"/><path class="uzkx0rksu"/><path class="qra4v06lc"/><path class="ecihrq6mt"/><path class="itikrg95t"/><path class="sl-ihibsr"/></g>`,
		"fallback": "fluent-emoji-flat:chicken",
	});
}

export default Component;
