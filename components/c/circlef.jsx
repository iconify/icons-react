import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8wf5cc3f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8wf5cc3f"/>`,
		"fallback": "whh:circlef",
	});
}

export default Component;
