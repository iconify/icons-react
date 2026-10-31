import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n6kzxybhe.css';
import '../../css/v/v288rybnp.css';
import '../../css/t/taunc0bck.css';
import '../../css/n/n3cchvypm.css';
import '../../css/m/m_bt1uqgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n6kzxybhe wm-shadow"/><path class="v288rybnp"/><path class="taunc0bck"/><path class="n3cchvypm"/><path class="m_bt1uqgv"/></g>`,
		"fallback": "withicons-retro:helicopter",
	});
}

export default Component;
