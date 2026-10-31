import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxta4n_om.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxta4n_om"/>`,
		"fallback": "pinhead:bicycle-in-box-gabled-shelter",
	});
}

export default Component;
