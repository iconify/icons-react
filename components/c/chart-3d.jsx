import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6h7smbqg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6h7smbqg"/>`,
		"fallback": "vaadin:chart-3d",
	});
}

export default Component;
