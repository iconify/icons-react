import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5h6soc8c.css';
import '../../css/n/n3kfhe2ac.css';
import '../../css/k/kpj5l1brl.css';
import '../../css/z/z2ozr-6hj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5h6soc8c"/><path class="n3kfhe2ac"/><path class="kpj5l1brl"/><path class="z2ozr-6hj"/>`,
		"fallback": "selfhst:beets-flask",
	});
}

export default Component;
