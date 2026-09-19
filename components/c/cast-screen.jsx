import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr9m9wk_h.css';
import '../../css/i/is84bqbrt.css';
import '../../css/h/hns4a0bze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gr9m9wk_h"/><path clip-rule="evenodd" class="is84bqbrt"/><path class="hns4a0bze"/></g>`,
		"fallback": "icon-park-outline:cast-screen",
	});
}

export default Component;
