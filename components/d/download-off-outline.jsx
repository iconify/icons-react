import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/w/wm005g.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/g/gzedbu.css';
import '../../css/t/tp2lab.css';
import '../../css/b/botfzx.css';
import '../../css/k/k7c9jh.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGv2VPRcjs"><path class="c5xdmn wm005g zxndow"/><path class="c5xdmn okiwoc zxndow"/><path class="c5xdmn gzedbu tp2lab"/></mask></defs><path mask="url(#SVGv2VPRcjs)" class="botfzx"/><path class="c5xdmn k7c9jh tp2lab"/>`,
		"fallback": "line-md:download-off-outline",
	});
}

export default Component;
