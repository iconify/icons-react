import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fojs3xgit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fojs3xgit"/>`,
		"fallback": "vadivam:fullscreen",
	});
}

export default Component;
