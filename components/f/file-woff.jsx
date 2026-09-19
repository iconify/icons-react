import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc09--5dt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc09--5dt"/>`,
		"fallback": "dinkie-icons:file-woff",
	});
}

export default Component;
