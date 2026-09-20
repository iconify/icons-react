import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/j/jq5ciubjk.css';
import '../../css/y/ya5544uqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9-zrkb4g"/><path class="jq5ciubjk"/><path class="ya5544uqz"/></g>`,
		"fallback": "tdesign:compass-1",
	});
}

export default Component;
