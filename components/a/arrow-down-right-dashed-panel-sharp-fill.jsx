import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg2cfubxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg2cfubxq"/>`,
		"fallback": "keyline-icons:arrow-down-right-dashed-panel-sharp-fill",
	});
}

export default Component;
