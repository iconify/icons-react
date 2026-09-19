import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6na-zfmx.css';
import '../../css/e/evd4z-yaz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6na-zfmx"/><path class="evd4z-yaz"/>`,
		"fallback": "carbon:ibm-wazi-deploy",
	});
}

export default Component;
