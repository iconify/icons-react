import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii30vacbk.css';
import '../../css/f/fdr6bubwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii30vacbk"/><path class="fdr6bubwj"/>`,
		"fallback": "lucide-extended:external-link-filled",
	});
}

export default Component;
