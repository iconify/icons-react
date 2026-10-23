import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqdbu0ewy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqdbu0ewy"/>`,
		"fallback": "vadivam:bell-off",
	});
}

export default Component;
