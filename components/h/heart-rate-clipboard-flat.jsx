import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q0269yhbj.css';
import '../../css/u/u9bc2djba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q0269yhbj"/><path class="u9bc2djba"/></g>`,
		"fallback": "streamline-sharp-color:heart-rate-clipboard-flat",
	});
}

export default Component;
