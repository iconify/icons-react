import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmfmj4bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmfmj4bzk"/>`,
		"fallback": "vadivam:grid-3x3",
	});
}

export default Component;
