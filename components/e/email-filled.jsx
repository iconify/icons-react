import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tytuppbws.css';
import '../../css/e/edp-a4blw.css';
import '../../css/z/z87r79bhv.css';
import '../../css/q/q01mz1cnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tytuppbws"/><path class="edp-a4blw"/><path class="z87r79bhv"/><path class="q01mz1cnd"/>`,
		"fallback": "bitcoin-icons:email-filled",
	});
}

export default Component;
