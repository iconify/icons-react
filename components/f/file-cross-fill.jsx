import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm7m2abwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm7m2abwq"/>`,
		"fallback": "mage:file-cross-fill",
	});
}

export default Component;
