import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1ochcn4a.css';
import '../../css/v/vb1um-bfa.css';
import '../../css/h/h1y2zabxa.css';
import '../../css/y/y9ai6lw9f.css';
import '../../css/z/z99iat1xw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1ochcn4a"/><path class="vb1um-bfa"/><path class="h1y2zabxa"/><path class="y9ai6lw9f"/><path class="z99iat1xw"/>`,
		"fallback": "la:alipay",
	});
}

export default Component;
