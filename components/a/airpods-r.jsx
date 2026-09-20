import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojr94bcww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojr94bcww"/>`,
		"fallback": "tabler:airpods-r",
	});
}

export default Component;
