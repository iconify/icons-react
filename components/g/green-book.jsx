import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcorabc0l.css';
import '../../css/h/hyq88ib-w.css';
import '../../css/k/kcrxxqbkx.css';
import '../../css/a/a8z3xdbuh.css';
import '../../css/n/n3fso8b_j.css';
import '../../css/a/ay8131wny.css';
import '../../css/y/yjnyvemzw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcorabc0l"/><path class="hyq88ib-w"/><path class="kcrxxqbkx"/><path class="a8z3xdbuh"/><path class="n3fso8b_j"/><circle class="ay8131wny"/><path class="yjnyvemzw"/>`,
		"fallback": "openmoji:green-book",
	});
}

export default Component;
