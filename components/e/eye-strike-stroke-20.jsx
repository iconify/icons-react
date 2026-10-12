import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byqstwb5i.css';
import '../../css/v/v83u78bsx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byqstwb5i"/><path class="v83u78bsx"/>`,
		"fallback": "garden:eye-strike-stroke-20",
	});
}

export default Component;
