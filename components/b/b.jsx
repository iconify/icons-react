import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd2zwrbiw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd2zwrbiw"/>`,
		"fallback": "glyphs-poly:b",
	});
}

export default Component;
