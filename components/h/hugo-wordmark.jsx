import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eng2rhbwx.css';
import '../../css/e/exmctc40i.css';
import '../../css/k/k2s84b7mj.css';
import '../../css/l/lb_x0gcbt.css';
import '../../css/u/uimlfvb0u.css';
import '../../css/z/zwfpe08lx.css';
import '../../css/f/fb7h2iggh.css';
import '../../css/t/tasnrho8x.css';
import '../../css/u/uwrs0sqor.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eng2rhbwx"/><path class="exmctc40i"/><path class="k2s84b7mj"/><path class="lb_x0gcbt"/><path class="uimlfvb0u"/><path class="zwfpe08lx"/><path class="fb7h2iggh"/><path class="tasnrho8x"/><path class="uwrs0sqor"/>`,
		"fallback": "devicon:hugo-wordmark",
	});
}

export default Component;
