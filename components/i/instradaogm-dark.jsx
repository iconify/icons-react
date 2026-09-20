import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abuqw2bqs.css';
import '../../css/q/qfo8yvbzw.css';
import '../../css/y/ysfe7ac7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abuqw2bqs"/><path class="qfo8yvbzw"/><path class="ysfe7ac7m"/>`,
		"fallback": "selfhst:instradaogm-dark",
	});
}

export default Component;
