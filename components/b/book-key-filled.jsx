import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/og3kloq9l.css';
import '../../css/s/sra7fu9uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="og3kloq9l"/><path class="sra7fu9uh"/></g>`,
		"fallback": "lucide-extended:book-key-filled",
	});
}

export default Component;
