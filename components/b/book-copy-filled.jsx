import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2nr3_bdv.css';
import '../../css/t/tkgm1jb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2nr3_bdv"/><path clip-rule="evenodd" class="tkgm1jb2o"/>`,
		"fallback": "lucide-extended:book-copy-filled",
	});
}

export default Component;
