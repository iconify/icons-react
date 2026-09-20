import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byhi3osvb.css';
import '../../css/v/vnvxctbkp.css';
import '../../css/p/pg9xawf5h.css';
import '../../css/g/gbfhxvenz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="byhi3osvb"/><path class="vnvxctbkp"/><path class="pg9xawf5h"/><path class="gbfhxvenz"/></g>`,
		"fallback": "tdesign:certificate",
	});
}

export default Component;
