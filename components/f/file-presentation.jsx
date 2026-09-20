import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbigfv4ml.css';
import '../../css/x/xi9vqyepo.css';
import '../../css/e/ey3ijkbgy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbigfv4ml"/><path class="xi9vqyepo"/><path class="ey3ijkbgy"/>`,
		"fallback": "vaadin:file-presentation",
	});
}

export default Component;
