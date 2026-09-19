import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xadmxrn2z.css';
import '../../css/t/to17vzthq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xadmxrn2z"/><path class="to17vzthq"/>`,
		"fallback": "garden:indent-increase-fill-12",
	});
}

export default Component;
