import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7d-_dquq.css';
import '../../css/n/n08ozhbbg.css';
import '../../css/z/zcaplciha.css';
import '../../css/f/f25nmwbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7d-_dquq"/><path class="n08ozhbbg"/><path clip-rule="evenodd" class="zcaplciha"/><path class="f25nmwbrc"/>`,
		"fallback": "solar:car-bold",
	});
}

export default Component;
