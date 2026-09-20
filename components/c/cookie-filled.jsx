import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz0y2n.css';
import '../../css/e/en9-5s.css';
import '../../css/n/nf43cj.css';
import '../../css/t/t63dyk.css';
import '../../css/f/f7nfkj.css';
import '../../css/l/leitsf.css';
import '../../css/d/dfau1u.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTA9aQdln"><path class="vz0y2n"/><circle class="en9-5s nf43cj"/><circle class="nf43cj t63dyk"/><circle class="f7nfkj nf43cj"/><circle class="leitsf nf43cj"/><circle class="dfau1u nf43cj"/></mask></defs><path mask="url(#SVGTA9aQdln)" class="botfzx"/>`,
		"fallback": "line-md:cookie-filled",
	});
}

export default Component;
