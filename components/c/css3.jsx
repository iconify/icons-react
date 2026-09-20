import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2k97lrgv.css';
import '../../css/m/mu-nzqbjx.css';
import '../../css/f/fipfphbhj.css';
import '../../css/v/vg4bqfbar.css';
import '../../css/e/er8w-absw.css';
import '../../css/z/z-e3lgbld.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2k97lrgv"/><path class="mu-nzqbjx"/><path class="fipfphbhj"/><path class="vg4bqfbar"/><path class="er8w-absw"/><path class="z-e3lgbld"/>`,
		"fallback": "thesvg-color:css3",
	});
}

export default Component;
