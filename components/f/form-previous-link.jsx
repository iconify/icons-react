import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdp5r-bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdp5r-bqk"/>`,
		"fallback": "grommet-icons:form-previous-link",
	});
}

export default Component;
