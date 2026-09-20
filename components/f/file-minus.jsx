import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqn0ipa3k.css';
import '../../css/m/mywbnbbvg.css';
import '../../css/y/yi4om9fmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uqn0ipa3k"/><path class="mywbnbbvg"/><path class="yi4om9fmy"/></g>`,
		"fallback": "tdesign:file-minus",
	});
}

export default Component;
