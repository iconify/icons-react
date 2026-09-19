import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bifzlh2iz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bifzlh2iz"/>`,
		"fallback": "icons8:down-round",
	});
}

export default Component;
