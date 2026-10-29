import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vlu3b4blq.css';
import '../../css/x/xag2gnuro.css';
import '../../css/o/o9wp5rbfh.css';
import '../../css/m/msfwckeky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vlu3b4blq"/><path class="wm-a xag2gnuro"/><path class="o9wp5rbfh"/><path class="msfwckeky wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-bun-duo",
	});
}

export default Component;
