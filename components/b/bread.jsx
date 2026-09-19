import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aevp-mb1f.css';
import '../../css/e/etbak1bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aevp-mb1f duoicon-secondary-layer"/><path class="duoicon-primary-layer etbak1bhm"/>`,
		"fallback": "duo-icons:bread",
	});
}

export default Component;
