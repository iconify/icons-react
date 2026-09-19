import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eub6fxbql.css';
import '../../css/r/ru5kd0b9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="eub6fxbql"/><path class="ru5kd0b9k"/></g>`,
		"fallback": "icon-park-solid:flag",
	});
}

export default Component;
