import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6qay1xjw.css';
import '../../css/b/b0s1w34pd.css';
import '../../css/z/zmh5mjbmo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6qay1xjw"/><path class="b0s1w34pd"/><path class="zmh5mjbmo"/>`,
		"fallback": "carbon:direction-rotary-right-filled",
	});
}

export default Component;
