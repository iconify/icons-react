import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-q__zh2t.css';
import '../../css/b/b52_8hb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-q__zh2t"/><path class="b52_8hb3f"/></g>`,
		"fallback": "streamline-ultimate:currency-pound-international",
	});
}

export default Component;
