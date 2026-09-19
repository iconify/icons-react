import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srbg1iv5a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srbg1iv5a"/>`,
		"fallback": "fluent-mdl2:add-notes",
	});
}

export default Component;
