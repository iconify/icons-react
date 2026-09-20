import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zn1_-h4qq.css';
import '../../css/t/ttwa5ubjw.css';
import '../../css/a/axvnduchj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zn1_-h4qq"/><path class="ttwa5ubjw"/><path class="axvnduchj"/></g>`,
		"fallback": "reicon:empty-wallet-remove",
	});
}

export default Component;
