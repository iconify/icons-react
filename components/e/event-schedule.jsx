import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-kkh0h8n.css';
import '../../css/k/kj5p4ecrw.css';
import '../../css/n/n_757dk6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-kkh0h8n"/><path class="kj5p4ecrw"/><path class="n_757dk6o"/>`,
		"fallback": "carbon:event-schedule",
	});
}

export default Component;
