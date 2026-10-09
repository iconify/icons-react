import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuveebb1b.css';
import '../../css/z/ziroa4b5h.css';
import '../../css/b/b3g5khbzy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuveebb1b"/><path class="ziroa4b5h"/><path class="b3g5khbzy"/>`,
		"fallback": "energy-icons:house-alert-20-bold",
	});
}

export default Component;
