import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2id_fb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2id_fb2n"/>`,
		"fallback": "reicon:external-drive",
	});
}

export default Component;
