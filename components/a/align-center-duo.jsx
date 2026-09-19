import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aplqkl7uk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aplqkl7uk"/>`,
		"fallback": "glyphs:align-center-duo",
	});
}

export default Component;
