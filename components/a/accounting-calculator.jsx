import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sfev94bnu.css';
import '../../css/c/clnx42b7s.css';
import '../../css/n/nylzg1e3n.css';
import '../../css/q/qjbrr-btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sfev94bnu"/><path class="clnx42b7s"/><path class="nylzg1e3n"/><path class="qjbrr-btl"/></g>`,
		"fallback": "streamline-freehand:accounting-calculator",
	});
}

export default Component;
