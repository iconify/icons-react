import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgpqfv2kb.css';
import '../../css/p/pp7u04bjd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgpqfv2kb"/><path class="pp7u04bjd"/>`,
		"fallback": "famicons:alarm-outline",
	});
}

export default Component;
