import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo289ibad.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gz3zk9b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo289ibad"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"/></path><path d="M6 2h12v0h-12ZM6 22h12v0h-12Z" class="cuyn6tgcc"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" to="M6 2h12v3h-12ZM6 22h12v-3h-12Z"/></path><path stroke-dashoffset="4" class="gz3zk9b4c"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" to="0"/></path>`,
		"fallback": "line-md:cellphonescreenshot",
	});
}

export default Component;
