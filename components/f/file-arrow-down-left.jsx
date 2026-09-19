import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdbfn1bya.css';
import '../../css/m/mlyzuub0m.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mdbfn1bya"/><path class="mlyzuub0m"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-arrow-down-left",
	});
}

export default Component;
