import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fd3302bbv.css';
import '../../css/g/ghilmzbaa.css';
import '../../css/e/e6xws6b9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="fd3302bbv"/><path class="ghilmzbaa"/><path class="e6xws6b9f"/></g>`,
		"fallback": "icon-park-solid:align-left-one",
	});
}

export default Component;
