import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pkdbr89io.css';
import '../../css/o/offv3sent.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pkdbr89io"/><path class="offv3sent"/></g>`,
		"fallback": "lucide-extended:door-closed-locked-filled",
	});
}

export default Component;
