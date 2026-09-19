import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbdic1yak.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbdic1yak"/>`,
		"fallback": "fluent-mdl2:feedback-request-mirrored-solid",
	});
}

export default Component;
