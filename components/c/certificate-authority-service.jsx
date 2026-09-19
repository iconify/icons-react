import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmf7520zx.css';
import '../../css/q/q8_kvdbel.css';
import '../../css/w/w-wb9bbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmf7520zx"/><path class="q8_kvdbel"/><path class="w-wb9bbqy"/>`,
		"fallback": "gcp:certificate-authority-service",
	});
}

export default Component;
