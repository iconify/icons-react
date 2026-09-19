import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcz84rbqg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcz84rbqg"/>`,
		"fallback": "fluent-mdl2:branch-shelveset",
	});
}

export default Component;
