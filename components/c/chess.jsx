import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i6txspcqg.css';
import '../../css/z/zq5nnn5yu.css';
import '../../css/b/bewfq9f6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i6txspcqg"/><path class="zq5nnn5yu"/><path class="bewfq9f6h"/></g>`,
		"fallback": "withicons-bauhaus:chess",
	});
}

export default Component;
