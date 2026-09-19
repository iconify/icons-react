import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwz_shb2v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwz_shb2v"/>`,
		"fallback": "glyphs:align-items-center",
	});
}

export default Component;
