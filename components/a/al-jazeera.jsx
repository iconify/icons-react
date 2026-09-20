import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozngikbrp.css';
import '../../css/j/ja_pvabut.css';
import '../../css/v/vd8v4dbog.css';
import '../../css/w/wusb7nxgf.css';
import '../../css/u/u6m0v1bng.css';

const viewBox = {"width":477.104,"height":161.281};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ozngikbrp"><path class="ja_pvabut"/><path class="vd8v4dbog"/><path class="wusb7nxgf"/></g><path class="u6m0v1bng"/>`,
		"fallback": "thesvg-color:al-jazeera",
	});
}

export default Component;
