import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnsslsbew.css';
import '../../css/b/bog13w73d.css';
import '../../css/k/kila4w3tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnsslsbew"/><path class="bog13w73d"/><path class="kila4w3tx"/>`,
		"fallback": "stash:billing-info-duotone",
	});
}

export default Component;
