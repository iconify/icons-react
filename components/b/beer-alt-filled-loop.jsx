import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/d/d1h9vt.css';
import '../../css/m/mf9_hs.css';
import '../../css/j/j3vs1j.css';
import '../../css/b/botfzx.css';
import '../../css/y/yx0aom.css';
import '../../css/d/d-r0slez.css';
import '../../css/t/tr-g4nv7i.css';
import '../../css/d/d-2uguob.css';
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
		"content": `<defs><mask id="SVGwSDgLekr"><path class="c5xdmn d1h9vt"/><path class="mf9_hs"/><path class="j3vs1j"/></mask></defs><path mask="url(#SVGwSDgLekr)" class="botfzx"/><path class="c5xdmn yx0aom"/>`,
		"fallback": "line-md:beer-alt-filled-loop",
	});
}

export default Component;
