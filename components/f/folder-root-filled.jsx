import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9scvyboa.css';
import '../../css/y/yyqev4b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9scvyboa"/><path class="yyqev4b5x"/>`,
		"fallback": "lucide-extended:folder-root-filled",
	});
}

export default Component;
