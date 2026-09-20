import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/e/e8lq4m.css';
import '../../css/t/thocil.css';
import '../../css/j/j3vs1j.css';
import '../../css/b/botfzx.css';
import '../../css/y/yx0aom.css';
import '../../css/d/d-bz0ufl.css';
import '../../css/d/d-mi8fnt.css';
import '../../css/d/d-uhwnay.css';
import '../../css/d/d-0z2h2x.css';
import '../../css/s/so-from-62.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVDeotdhs"><path class="c5xdmn e8lq4m"/><path class="thocil"/><path class="j3vs1j"/></mask></defs><path mask="url(#SVGVDeotdhs)" class="botfzx"/><path class="c5xdmn yx0aom"/>`,
		"fallback": "line-md:beer-alt-filled",
	});
}

export default Component;
