import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn9jlpb0m.css';
import '../../css/w/wyqznsb4z.css';
import '../../css/e/eexuiebst.css';
import '../../css/t/tmqg3xbsd.css';
import '../../css/d/ddy94qblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gn9jlpb0m wm-deco"/><path class="wm-k wyqznsb4z"/><path class="eexuiebst wm-k"/><path class="tmqg3xbsd wm-k"/><path class="ddy94qblz wm-shine"/></g>`,
		"fallback": "withicons-anime:arrow-down-right",
	});
}

export default Component;
