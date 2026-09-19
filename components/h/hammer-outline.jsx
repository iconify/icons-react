import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw6qw7b0w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bw6qw7b0w"/>`,
		"fallback": "glyphs:hammer-outline",
	});
}

export default Component;
