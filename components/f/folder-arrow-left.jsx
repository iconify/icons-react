import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/h/h445vw.css';
import '../../css/z/zxndow.css';
import '../../css/l/l6j71m.css';
import '../../css/q/qrxbwy.css';
import '../../css/b/botfzx.css';
import '../../css/c/cym4fh.css';
import '../../css/s/s8e22g.css';
import '../../css/v/vng3av.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-tnsd9f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVZjSodvI"><path class="c5xdmn h445vw zxndow"/><path class="c5xdmn l6j71m zxndow"/><path class="qrxbwy"/></mask></defs><path mask="url(#SVGVZjSodvI)" class="botfzx"/><path class="c5xdmn cym4fh s8e22g"/><path class="c5xdmn s8e22g vng3av"/>`,
		"fallback": "line-md:folder-arrow-left",
	});
}

export default Component;
