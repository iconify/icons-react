import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k3l516byl.css';
import '../../css/e/eravlhcio.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k3l516byl"/><path class="eravlhcio"/></g>`,
		"fallback": "streamline-flex-color:graph-dot-flat",
	});
}

export default Component;
