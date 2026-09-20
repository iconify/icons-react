import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcqw2bbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcqw2bbly"/>`,
		"fallback": "ri:ai-generate-2",
	});
}

export default Component;
