import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctoh45brs.css';
import '../../css/k/k0757lbit.css';
import '../../css/z/zfunmzbpv.css';
import '../../css/a/a9wju1rnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctoh45brs"/><path clip-rule="evenodd" class="k0757lbit"/><path class="zfunmzbpv"/><path class="a9wju1rnc"/>`,
		"fallback": "solar:album-bold",
	});
}

export default Component;
