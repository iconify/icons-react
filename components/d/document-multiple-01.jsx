import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdp22ib8n.css';
import '../../css/s/sz152uiha.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdp22ib8n"/><path class="sz152uiha"/>`,
		"fallback": "carbon:document-multiple-01",
	});
}

export default Component;
