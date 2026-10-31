import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnry6fbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnry6fbzn"/>`,
		"fallback": "vadivam:database-cog",
	});
}

export default Component;
