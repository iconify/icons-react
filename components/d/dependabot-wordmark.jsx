import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_lja2bcd.css';
import '../../css/w/wmnla3ben.css';
import '../../css/p/ppxb-5bqg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_lja2bcd"/><path class="wmnla3ben"/><path class="ppxb-5bqg"/>`,
		"fallback": "devicon:dependabot-wordmark",
	});
}

export default Component;
