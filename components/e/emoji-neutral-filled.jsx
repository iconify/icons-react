import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz_aku.css';
import '../../css/t/t5pxry.css';
import '../../css/h/hox66x.css';
import '../../css/u/u63-fz.css';
import '../../css/c/car43j.css';
import '../../css/c/c42gtn.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhnPfdbAk"><path class="pz_aku t5pxry"/><path class="hox66x t5pxry u63-fz"/><path class="car43j t5pxry u63-fz"/><path class="c42gtn t5pxry u63-fz"/></mask></defs><path mask="url(#SVGhnPfdbAk)" class="botfzx"/>`,
		"fallback": "line-md:emoji-neutral-filled",
	});
}

export default Component;
