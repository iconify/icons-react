import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge36teifs.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge36teifs"/>`,
		"fallback": "fluent-mdl2:default-ratio",
	});
}

export default Component;
