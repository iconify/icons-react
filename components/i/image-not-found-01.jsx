import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zj-kox43j.css';
import '../../css/h/hew_hqbtw.css';
import '../../css/f/frzp0kb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zj-kox43j"/><path class="hew_hqbtw"/><path class="frzp0kb3t"/></g>`,
		"fallback": "hugeicons:image-not-found-01",
	});
}

export default Component;
