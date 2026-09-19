import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbt1owbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbt1owbuo"/>`,
		"fallback": "healthicons:inpatient-24px",
	});
}

export default Component;
