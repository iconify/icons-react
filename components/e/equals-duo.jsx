import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r87km9-rb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r87km9-rb"/>`,
		"fallback": "glyphs:equals-duo",
	});
}

export default Component;
