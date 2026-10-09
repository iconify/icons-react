import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8ikizbpd.css';
import '../../css/q/q_u57ubre.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8ikizbpd"/><path class="q_u57ubre"/>`,
		"fallback": "energy-icons:heading-20",
	});
}

export default Component;
