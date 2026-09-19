import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw14v029a.css';
import '../../css/r/r3-2ecc9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw14v029a"/><path class="r3-2ecc9w"/>`,
		"fallback": "boxicons:database-alt-filled",
	});
}

export default Component;
