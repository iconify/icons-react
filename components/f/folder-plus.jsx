import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by90vjb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by90vjb3f"/>`,
		"fallback": "vadivam:folder-plus",
	});
}

export default Component;
