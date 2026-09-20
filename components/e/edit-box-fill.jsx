import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbx2phzgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbx2phzgt"/>`,
		"fallback": "ri:edit-box-fill",
	});
}

export default Component;
