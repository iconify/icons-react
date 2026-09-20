import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmi0wdbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmi0wdbos"/>`,
		"fallback": "mage:file-check-fill",
	});
}

export default Component;
