import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w590n2jyo.css';
import '../../css/c/c8cpgrb_s.css';
import '../../css/w/wxj0babdb.css';
import '../../css/d/dv9yx6bkw.css';
import '../../css/j/j58td6bkg.css';

const viewBox = {"width":256,"height":288};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w590n2jyo"/><path class="c8cpgrb_s"/><path class="wxj0babdb"/><path class="dv9yx6bkw"/><path class="j58td6bkg"/>`,
		"fallback": "thesvg-color:cplusplus",
	});
}

export default Component;
