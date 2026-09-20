import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gra93dxnb.css';
import '../../css/n/nj6g2rblf.css';
import '../../css/t/t21xz13ln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gra93dxnb"/><path class="nj6g2rblf"/><path class="t21xz13ln"/></g>`,
		"fallback": "streamline-ultimate:help-question-network",
	});
}

export default Component;
