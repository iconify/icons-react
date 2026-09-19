import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suoc8zbdv.css';

const viewBox = {"width":1728,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suoc8zbdv"/>`,
		"fallback": "fa:circle-o-notch",
	});
}

export default Component;
