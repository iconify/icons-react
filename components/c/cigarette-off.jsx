import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fav1lfbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fav1lfbxj"/>`,
		"fallback": "vadivam:cigarette-off",
	});
}

export default Component;
