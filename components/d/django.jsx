import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-wdiqbjd.css';
import '../../css/i/it2p9rrcl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-wdiqbjd"/><path class="it2p9rrcl"/>`,
		"fallback": "material-icon-theme:django",
	});
}

export default Component;
