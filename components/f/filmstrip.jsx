import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw8w66t8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw8w66t8h"/>`,
		"fallback": "gravity-ui:filmstrip",
	});
}

export default Component;
