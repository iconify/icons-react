import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hch_afbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hch_afbol"/>`,
		"fallback": "vadivam:folder-minus",
	});
}

export default Component;
