import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt-t8abnw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt-t8abnw"/>`,
		"fallback": "temaki:heavy-rail",
	});
}

export default Component;
