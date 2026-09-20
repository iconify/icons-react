import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfid2qr4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfid2qr4n"/>`,
		"fallback": "thesvg:gofundme",
	});
}

export default Component;
