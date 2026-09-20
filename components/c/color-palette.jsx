import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/am43mfcpe.css';
import '../../css/k/kv0twb6oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="am43mfcpe"/><path class="kv0twb6oq"/></g>`,
		"fallback": "streamline-freehand:color-palette",
	});
}

export default Component;
