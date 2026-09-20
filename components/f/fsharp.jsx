import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrm90vr2z.css';
import '../../css/r/rvlpixg0l.css';
import '../../css/d/dgch7ibmy.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrm90vr2z"/><path class="rvlpixg0l"/><path class="dgch7ibmy"/>`,
		"fallback": "material-icon-theme:fsharp",
	});
}

export default Component;
