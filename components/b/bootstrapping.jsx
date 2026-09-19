import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k65h5h91a.css';
import '../../css/d/dtgkx25td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k65h5h91a"/><path class="dtgkx25td"/>`,
		"fallback": "eos-icons:bootstrapping",
	});
}

export default Component;
