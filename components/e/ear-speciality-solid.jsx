import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wraso3b4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wraso3b4f"/>`,
		"fallback": "streamline-flex:ear-speciality-solid",
	});
}

export default Component;
