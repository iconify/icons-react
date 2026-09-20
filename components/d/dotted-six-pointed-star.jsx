import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4-wspbhc.css';
import '../../css/s/s8zpzac9t.css';
import '../../css/v/v5-4udxcl.css';
import '../../css/y/yl5rnhgwk.css';
import '../../css/f/fkc8tbbmz.css';
import '../../css/b/bt5dambkb.css';
import '../../css/y/y0brk_b9i.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4-wspbhc"/><path paint-order="stroke fill markers" class="s8zpzac9t"/><path paint-order="stroke fill markers" class="v5-4udxcl"/><path class="yl5rnhgwk"/><path class="fkc8tbbmz"/><path paint-order="stroke fill markers" class="bt5dambkb"/><path paint-order="stroke fill markers" class="y0brk_b9i"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:dotted-six-pointed-star",
	});
}

export default Component;
