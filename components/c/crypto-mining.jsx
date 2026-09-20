import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t08n0l47p.css';
import '../../css/m/mp4y6wb4i.css';
import '../../css/z/zodgzu85w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t08n0l47p"/><path class="mp4y6wb4i"/><path class="zodgzu85w"/></g>`,
		"fallback": "streamline-freehand-color:crypto-mining",
	});
}

export default Component;
