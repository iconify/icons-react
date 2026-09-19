import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmch1189h.css';
import '../../css/n/n_0uj0b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zmch1189h"/><path class="n_0uj0b-y"/>`,
		"fallback": "boxicons:gallery-vertical-filled",
	});
}

export default Component;
