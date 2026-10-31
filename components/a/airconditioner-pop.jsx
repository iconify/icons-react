import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx-tnkxku.css';
import '../../css/e/et3midbzr.css';
import '../../css/q/q49un34fj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rx-tnkxku"/><path class="et3midbzr"/><path class="q49un34fj"/></g>`,
		"fallback": "streamline-kameleon-color:airconditioner-pop",
	});
}

export default Component;
