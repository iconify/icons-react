import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rxlvccb1a.css';
import '../../css/a/atp2gybgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rxlvccb1a"/><path class="atp2gybgt"/></g>`,
		"fallback": "streamline-ultimate:beer-glass",
	});
}

export default Component;
