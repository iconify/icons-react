import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8lb6scap.css';
import '../../css/j/j31r41azg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8lb6scap"/><path class="j31r41azg"/>`,
		"fallback": "energy-icons:dispatch-20",
	});
}

export default Component;
