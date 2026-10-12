import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozxylewza.css';
import '../../css/z/ztl9t8bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozxylewza"/><path clip-rule="evenodd" class="ztl9t8bet"/>`,
		"fallback": "lucide-extended:circle-gauge-filled",
	});
}

export default Component;
