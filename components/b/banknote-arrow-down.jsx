import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gae93nb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gae93nb_y"/>`,
		"fallback": "vadivam:banknote-arrow-down",
	});
}

export default Component;
