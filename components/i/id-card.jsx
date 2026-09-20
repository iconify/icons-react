import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egdh-hw2k.css';
import '../../css/f/f5dr_db7m.css';
import '../../css/g/gv6l2kbvz.css';
import '../../css/q/qwevpeepy.css';
import '../../css/n/n3dwp1gqg.css';
import '../../css/j/jz3euubki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="egdh-hw2k"/><path class="f5dr_db7m"/><path class="gv6l2kbvz"/><path class="qwevpeepy"/><path class="n3dwp1gqg"/><path class="jz3euubki"/></g>`,
		"fallback": "streamline-cyber-color:id-card",
	});
}

export default Component;
