import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp0io-2sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp0io-2sf"/>`,
		"fallback": "vadivam:brush-cleaning",
	});
}

export default Component;
