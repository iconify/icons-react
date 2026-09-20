import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9irk-b7g.css';
import '../../css/w/wc_sb7zdp.css';
import '../../css/j/jj44zgj2e.css';
import '../../css/x/x7i0fddxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b9irk-b7g"/><path class="wc_sb7zdp"/><path class="jj44zgj2e"/><path class="x7i0fddxj"/></g>`,
		"fallback": "streamline-ultimate:amusement-park-balloon",
	});
}

export default Component;
