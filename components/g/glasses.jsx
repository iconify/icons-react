import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/td0jdwbwe.css';
import '../../css/l/lxtdtgb2j.css';
import '../../css/e/eznhzablb.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="td0jdwbwe"/><path class="lxtdtgb2j wm-shine"/><path class="eznhzablb"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:glasses",
	});
}

export default Component;
