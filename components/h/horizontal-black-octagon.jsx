import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqualhbgp.css';
import '../../css/v/v_pt9ob9w.css';
import '../../css/d/dcu62ebsh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqualhbgp"/><path class="v_pt9ob9w"/><path class="dcu62ebsh"/>`,
		"fallback": "openmoji:horizontal-black-octagon",
	});
}

export default Component;
