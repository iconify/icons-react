import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7v-nsz8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d7v-nsz8w"/>`,
		"fallback": "griddy-icons:dental-forceps",
	});
}

export default Component;
