import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz625mb3h.css';
import '../../css/v/vfll34fsr.css';
import '../../css/v/v69b44b0n.css';
import '../../css/u/uwtypmg-l.css';
import '../../css/j/jo4v5sbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz625mb3h"/><path class="vfll34fsr"/><path class="v69b44b0n"/><path class="uwtypmg-l"/><path class="jo4v5sbsx"/>`,
		"fallback": "solar:chevrons-left-right-ellipsis-bold",
	});
}

export default Component;
