import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo-ogvw-d.css';
import '../../css/n/n9sskqbyg.css';
import '../../css/n/nb80u6_sx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qo-ogvw-d"/><path class="n9sskqbyg"/><path class="nb80u6_sx"/></g>`,
		"fallback": "streamline-color:business-idea-money",
	});
}

export default Component;
