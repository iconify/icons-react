import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bg5dkdbac.css';
import '../../css/e/emfp13bdp.css';
import '../../css/c/cq2ylzbrg.css';
import '../../css/c/c3ur3-0sv.css';
import '../../css/c/c7ylj0b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bg5dkdbac"/><path class="emfp13bdp"/><path class="cq2ylzbrg"/><path class="c3ur3-0sv"/><path class="c7ylj0b5z"/></g>`,
		"fallback": "streamline-cyber-color:business-idea-light-bulb",
	});
}

export default Component;
