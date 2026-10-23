import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdv3kor9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdv3kor9i"/>`,
		"fallback": "vadivam:hand",
	});
}

export default Component;
