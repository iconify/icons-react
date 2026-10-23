import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7h4vjb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7h4vjb1a"/>`,
		"fallback": "vadivam:file-type-corner",
	});
}

export default Component;
