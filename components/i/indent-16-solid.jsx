import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs49-jbes.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs49-jbes"/>`,
		"fallback": "sidekickicons:indent-16-solid",
	});
}

export default Component;
