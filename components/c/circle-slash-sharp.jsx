import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrk_5v7yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrk_5v7yi"/>`,
		"fallback": "keyline-icons:circle-slash-sharp",
	});
}

export default Component;
