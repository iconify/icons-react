import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpdm5ybbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpdm5ybbz"/>`,
		"fallback": "gcp:beyondcorp",
	});
}

export default Component;
