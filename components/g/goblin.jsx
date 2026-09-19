import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pren13bwq.css';
import '../../css/p/p5dxpkfgw.css';
import '../../css/u/u4z7v9_sz.css';
import '../../css/f/fnrwmwo1i.css';
import '../../css/n/nh9hh7bwx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pren13bwq"/><path class="p5dxpkfgw"/><path class="u4z7v9_sz"/><path class="fnrwmwo1i"/><path class="nh9hh7bwx"/></g>`,
		"fallback": "fluent-emoji-flat:goblin",
	});
}

export default Component;
