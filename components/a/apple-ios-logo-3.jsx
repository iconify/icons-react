import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mccykob8p.css';
import '../../css/e/eudvpqidf.css';
import '../../css/b/bldh4zbdj.css';
import '../../css/n/n1mjhwg_r.css';
import '../../css/z/z17rehu7v.css';
import '../../css/f/f7a76ab-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="mccykob8p"/><path class="eudvpqidf"/><path class="bldh4zbdj"/><path class="n1mjhwg_r"/><path class="z17rehu7v"/><path class="f7a76ab-n"/></g>`,
		"fallback": "streamline-logos:apple-ios-logo-3",
	});
}

export default Component;
