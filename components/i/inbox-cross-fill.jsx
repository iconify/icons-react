import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee3miprbq.css';
import '../../css/p/p7vnctb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee3miprbq"/><path class="p7vnctb1h"/>`,
		"fallback": "mage:inbox-cross-fill",
	});
}

export default Component;
