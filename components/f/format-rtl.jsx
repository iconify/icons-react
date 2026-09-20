import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t563peikw.css';
import '../../css/v/vm6rlmbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="t563peikw"/><path vector-effect="non-scaling-stroke" class="vm6rlmbny"/></g>`,
		"fallback": "wordpress:format-rtl",
	});
}

export default Component;
