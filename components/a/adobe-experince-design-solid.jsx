import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e49olqbuq.css';
import '../../css/m/m3ouxln2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e49olqbuq"/><path clip-rule="evenodd" class="m3ouxln2p"/>`,
		"fallback": "basil:adobe-experince-design-solid",
	});
}

export default Component;
