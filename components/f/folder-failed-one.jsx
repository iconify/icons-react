import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/r/r8la91abr.css';
import '../../css/b/b4thm1bep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="r8la91abr"/><path class="b4thm1bep"/></g>`,
		"fallback": "icon-park:folder-failed-one",
	});
}

export default Component;
