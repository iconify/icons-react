import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i9x5yqbwe.css';
import '../../css/b/bikvxdbad.css';
import '../../css/s/s8uiupbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="i9x5yqbwe"/><path class="bikvxdbad"/><path class="s8uiupbae"/></g>`,
		"fallback": "hugeicons:compass",
	});
}

export default Component;
