import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z68fdjelf.css';
import '../../css/h/hzliorb3i.css';
import '../../css/v/vbqkaybcx.css';
import '../../css/g/gclm_lu2r.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/ihbz2icia.css';
import '../../css/z/z9c284bre.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z68fdjelf"/><path class="hzliorb3i"/><path class="vbqkaybcx"/><path class="gclm_lu2r"/><g class="jn8qy4bru"><path class="ihbz2icia"/><path class="z9c284bre"/></g>`,
		"fallback": "openmoji:bell-pepper",
	});
}

export default Component;
