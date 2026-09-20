import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utegbx69l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utegbx69l"/>`,
		"fallback": "mdi:dentist",
	});
}

export default Component;
