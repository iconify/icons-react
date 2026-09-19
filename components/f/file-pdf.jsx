import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/updz07b-a.css';
import '../../css/g/g8ph7i0bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="updz07b-a"/><path class="g8ph7i0bc"/>`,
		"fallback": "bxs:file-pdf",
	});
}

export default Component;
