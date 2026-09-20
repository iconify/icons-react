import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vwtlgbhlv.css';
import '../../css/x/x-oeo5lde.css';
import '../../css/x/x1fksccrt.css';
import '../../css/d/dfqro5y3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="vwtlgbhlv"/><circle class="x-oeo5lde"/><circle class="x1fksccrt"/><path class="dfqro5y3h"/></g>`,
		"fallback": "majesticons:git-fork-line",
	});
}

export default Component;
