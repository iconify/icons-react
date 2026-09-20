import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3lbi6bds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3lbi6bds"/>`,
		"fallback": "streamline-plump:allergens-gluten-remix",
	});
}

export default Component;
