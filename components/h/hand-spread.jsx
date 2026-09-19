import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbfje_oxw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbfje_oxw"/>`,
		"fallback": "glyphs-poly:hand-spread",
	});
}

export default Component;
