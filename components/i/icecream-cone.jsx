import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/quhkq7b5u.css';
import '../../css/w/w3xcfabgt.css';
import '../../css/w/wd2tq0qpl.css';
import '../../css/q/qahbz5jfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="quhkq7b5u"/><path class="w3xcfabgt"/><path class="wd2tq0qpl"/><path class="qahbz5jfa"/></g>`,
		"fallback": "streamline-cyber-color:icecream-cone",
	});
}

export default Component;
