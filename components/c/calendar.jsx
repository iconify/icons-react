import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yas9yabtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yas9yabtw"/>`,
		"fallback": "vadivam:calendar",
	});
}

export default Component;
