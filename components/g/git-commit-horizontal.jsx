import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb1v_judf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb1v_judf"/>`,
		"fallback": "vadivam:git-commit-horizontal",
	});
}

export default Component;
